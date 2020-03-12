import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./archive_hero.module.css";
import "../index.css";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
import Logo from "./logo";

const ArchiveHero = props => {
  const data = useStaticQuery(graphql`
    query {
    allImageSharp(filter: {fluid: {originalName: {glob: "background-section-devcon*3x.png"}}}) {
      edges {
        node {
          fluid(maxWidth: 1200) {
            originalName
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    }`);

  const backgroundFluidMap = {}
  
  data.allImageSharp.edges.forEach(function(f) {
    const filename = f.node.fluid.originalName
    if (filename.startsWith('background-section-devcon') && filename.endsWith('@3x.png')) {
      const edition = filename[25]
      backgroundFluidMap[edition] = f.node.fluid
    }
  })


  return (
    <BackgroundImage
      fluid={backgroundFluidMap[props.number]}
      className={css.archiveHero}
    >
      <div className={css.logoPaneContainer}>
        <Logo number={props.number} white />
      </div>
    </BackgroundImage>
  );
};

export default ArchiveHero;
