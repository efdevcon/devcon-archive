import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from 'gatsby-background-image'

/* Components */
import LogoDevcon from "./logo-devcon";



const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "archive-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage fluid={data.file.childImageSharp.fluid} className={css.hero} Tag="section">
      <h1><LogoDevcon /></h1>
      <p className={css.heroText}>
        Annual conference for all Ethereum developers, researchers, thinkers, and
        makers
      </p>
      {/* <p className={css.callToAction}>
        <a className={css.callToActionLink} href="#devcon-about">
          Read More
        </a>
      </p> */}
    </BackgroundImage>
  )
};

export default Hero;
