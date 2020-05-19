import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
// import Button from "./button";
import LogoDevcon from "./logo-devcon";

const Hero = () => {
  const { triangles, city } = useStaticQuery(graphql`
    query {
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
    city.childImageSharp.fluid, 
    triangles.childImageSharp.fluid,
  ];

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      className={css.hero}
      Tag="section"
      style={{
        /* city, triangles */
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'bottom, top',
        backgroundSize: 'contain, cover',
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
