import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./archive_hero.module.css";
import "../index.css";
import "typeface-work-sans";

/* HTML */
import BackgroundImage from "gatsby-background-image";

/* Components */
import Logo from "./logo";

const ArchiveHero = props => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "devcon1-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      className={css.archiveHero}
    >
      <Logo />
      <div>
        <h1>Devcon {props.number}</h1>
        <h2>{props.location}</h2>
        <h4>{props.date}</h4>
      </div>
    </BackgroundImage>
  );
};

export default ArchiveHero;
