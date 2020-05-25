import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
// import Button from "./button";
import LogoDevcon from "./logo-devcon";

/* Helper Function */
import useWindowWidth from "../helper/useWindowWidth";

const Hero = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  const { fog, triangles, city } = useStaticQuery(graphql`
    query {
      fog: file(relativePath: { eq: "background-fog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      triangles: file(
        relativePath: { eq: "devcon_archive_hero_background.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city: file(relativePath: { eq: "background-landscape@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [
    fog.childImageSharp.fluid,
    city.childImageSharp.fluid,
    triangles.childImageSharp.fluid,
  ];

  const getBackgroundPosition = isMobile
    ? "center 10%, bottom center, 100% bottom"
    : "bottom 100%, top center, bottom";
  const getBackgroundSize = isMobile
    ? "cover, cover, cover"
    : "cover, 140%, 100%";

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      className={css.hero}
      Tag="section"
      style={{
        /* fog, triangles, city */
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundPosition: getBackgroundPosition,
        backgroundSize: getBackgroundSize,
      }}
    >
      <div className={css.logoDivider}>
        <LogoDevcon />
      </div>
      <p className={css.heroText}>
        The annual conference for all Ethereum developers, researchers,
        thinkers, and makers.
      </p>
      <h3 className={css.announcement}>COLOMBIA 2021</h3>
      {/* <div className={css.buttonContainer}>
        <Button devconNum="default" link="https://devcon.org">
          Devcon6 Info »{" "}
        </Button>
      </div> */}
    </BackgroundImage>
  );
};

export default Hero;
