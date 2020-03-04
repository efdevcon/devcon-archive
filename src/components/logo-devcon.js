import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./logo-devcon.module.css";
import "../index.css";
import "typeface-work-sans";

const LogoDevcon = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "devcon-logo-horizontal.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
        alt="Devcon Logo"
      />
    </div>
  );
};

export default LogoDevcon;
