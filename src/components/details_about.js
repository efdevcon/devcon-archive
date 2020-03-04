import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./details_about.module.css";
import "../index.css";
import "typeface-work-sans";

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

  return (
    <div className={css.about}>
      <div className={css.aboutColumn}>
        <Img
          className={css.detailsImage}
          fluid={data.file.childImageSharp.fluid}
          alt="Stock Devcon Photo"
        />
      </div>
      <div className={css.aboutColumn}>
        <h2 className={css.header}>{props.header}</h2>
        <p className={css.aboutText}>{props.text}</p>
      </div>
    </div>
  );
};

export default DetailsAbout;
