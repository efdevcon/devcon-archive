import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/* CSS */
import css from "./details_about.module.css";
import "../index.css";

const DetailsAbout = props => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fluid: { originalName: { glob: "devcon*_details@3x*" } } }
      ) {
        edges {
          node {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const detailsFluidMap = {};

  data.allImageSharp.edges.forEach(function(f) {
    const filename = f.node.fluid.originalName;
    const edition = filename[6];
    detailsFluidMap[edition] = f.node.fluid;
  });

  const highlightClass = css[`dc${props.number}Highlight`];

  return (
    <div className={css.about}>
      <div className={css.aboutColumn}>
        <Img
          className={css.detailsImage}
          fluid={detailsFluidMap[props.number]}
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
