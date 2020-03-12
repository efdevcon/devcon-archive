import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./logo.module.css";
import "../index.css";

const Logo = props => {

  const data = useStaticQuery(graphql`
    fragment Logo on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      DC0Logo: file(relativePath: { eq: "dc0-logo@2x.png" }) { ...Logo }
      DC1Logo: file(relativePath: { eq: "dc1-logo@2x.png" }) { ...Logo }
      DC2Logo: file(relativePath: { eq: "dc2-logo@2x.png" }) { ...Logo }
      DC3Logo: file(relativePath: { eq: "dc3-logo@2x.png" }) { ...Logo }
      DC4Logo: file(relativePath: { eq: "dc4-logo@2x.png" }) { ...Logo }
      DC5Logo: file(relativePath: { eq: "dc5-logo@2x.png" }) { ...Logo }
      DC0LogoWhite: file(relativePath: { eq: "dc0-logo-white@2x.png" }) { ...Logo }
      DC1LogoWhite: file(relativePath: { eq: "dc1-logo-white@2x.png" }) { ...Logo }
      DC2LogoWhite: file(relativePath: { eq: "dc2-logo-white@2x.png" }) { ...Logo }
      DC3LogoWhite: file(relativePath: { eq: "dc3-logo-white@2x.png" }) { ...Logo }
      DC4LogoWhite: file(relativePath: { eq: "dc4-logo-white@2x.png" }) { ...Logo }
      DC5LogoWhite: file(relativePath: { eq: "dc5-logo-white@2x.png" }) { ...Logo }
    }
  `);
  console.log('DATA', data);

  let imageKey = ('white' in props)? `DC${props.number}LogoWhite` : `DC${props.number}Logo`
  
  return (
    <div className={css.logoContainer}>
      <Img
        className={css.logo}
        fluid={data[imageKey].childImageSharp.fluid}
        alt="Ethereum Logo"
      />
    </div>
  );
};

export default Logo;
