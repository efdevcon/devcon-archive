import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./logo.module.css";
import "../index.css";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ethereum-diamond.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={css.logoContainer}>
      <Img
        className={css.logo}
        fluid={data.file.childImageSharp.fluid}
        alt="Ethereum Logo"
      />
    </div>
  );
};

export default Logo;
