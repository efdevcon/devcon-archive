import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
import LogoDevcon from "./logo-devcon";

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
      <div className={css.logoDivider}>
        <LogoDevcon />
      </div>
      <p className={css.heroText}>
        The annual conference for all Ethereum developers, researchers,
        thinkers, and makers.
      </p>
      <p className={css.heroText}>
        See recent updates on our <a href="#">Devcon blog</a>
      </p>
    </BackgroundImage>
  );
};

export default Hero;
