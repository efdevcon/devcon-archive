import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./logo-devcon.module.css";
import "../index.css";

const LogoDevcon = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "devcon-bogota-logo-for-archive.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
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
