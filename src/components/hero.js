import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import css from "./hero.module.css";
import "../index.css";


const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "devcon-bogota-section-design-background.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      className={css.hero}
      Tag="section"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
        backgroundSize: "cover",
      }}
    >
      <h1 className={css.title}>Devcon<br/>Archive</h1>
    </BackgroundImage>
  );
};

export default Hero;
