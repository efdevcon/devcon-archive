import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
import Button from "./button";
import LogoDevcon from "./logo-devcon";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "devcon_archive_hero_background.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
    >
      <div className={css.logoDivider}>
        <LogoDevcon />
      </div>
      <p className={css.heroText}>
        Annual conference for all Ethereum developers, researchers, thinkers,
        and makers
      </p>
      <div className={css.buttonContainer}>
        <Button devconNum="default" link="https://devcon.org">
          Devcon6 Info »{" "}
        </Button>
      </div>
      {/* <p className={css.callToAction}>
        <a className={css.callToActionLink} href="#devcon-about">
          Read More
        </a>
      </p> */}
    </BackgroundImage>
  );
};

export default Hero;
