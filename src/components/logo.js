import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./logo.module.css";
import "../index.css";

const Logo = props => {

  const data = useStaticQuery(graphql`
    query {
      dc0logo:file(relativePath: { eq: "dc0-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dc1logo:file(relativePath: { eq: "dc1-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dc2logo:file(relativePath: { eq: "dc2-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dc3logo:file(relativePath: { eq: "dc3-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dc4logo:file(relativePath: { eq: "dc4-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dc5logo:file(relativePath: { eq: "dc5-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log('DATA', data);
  return (
    <div className={css.logoContainer}>
      <Img
        className={css.logo}
        fluid={data[`dc${props.number}logo`].childImageSharp.fluid}
        alt="Ethereum Logo"
      />
    </div>
  );
};

export default Logo;
