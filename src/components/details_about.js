import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./details_about.module.css";
import "../index.css";

const DetailsAbout = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "devcon1-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const highlightClass = css[`dc${props.number}Highlight`];

  return (
    <div className={css.about}>
      <div className={css.aboutColumn}>
        <Img
          className={css.detailsImage}
          fluid={data.file.childImageSharp.fluid}
          alt={`${props.header} Photo`}
        />
      </div>
      <div className={css.aboutColumn}>
        <h2 className={`${css.header} ${highlightClass}`}>{props.header}</h2>
        <p className={css.aboutText}>{props.text}</p>
      </div>
    </div>
  );
};

export default DetailsAbout;
