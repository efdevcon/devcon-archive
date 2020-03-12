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
      <div className={css.logoPaneContainer}>
        <Logo number={props.number} white />
      </div>
    </BackgroundImage>
  );
};

export default ArchiveHero;
