import React from "react";
// import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./archive.module.css";
import "../index.css";

/* Components */
import Logo from "./logo";
import BackgroundImage from "gatsby-background-image";


const Archive = props => {

  const backgroundClass = css[`dc${props.number}Background`];
  const gradientClass = css[`dc${props.number}Gradient`];
  const hoverClass = css[`dc${props.number}Hover`];

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              originalName
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
      className={`${css.archive} ${backgroundClass}`}>

      <div className={css.tint}></div>

      <div className={css.archiveCol}>
        <Logo />
      </div>

      <div className={css.archiveCol}>
        <h1>{props.header}</h1>
        <h3>{props.location}</h3>
        <h4>{props.date}</h4>
      </div>

      <div className={css.archiveCol}>
        <p className={css.archiveText}>{props.text}</p>
        <ul className={`${css.archiveLinks} ${gradientClass}`}>
          <li>
            <a
              className={`${hoverClass}`}
              href={`./devcon-${props.number}/details`}
            >
              Details
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              className={`${hoverClass}`}
              href={`./devcon-${props.number}/videos`}
            >
              {" "}
              Videos
            </a>
          </li>
          {/*
          <Link
            className={css.archiveLink}
            to={`devcon-${props.number}/supporters`}
          >
            Supporters
          </Link> */}
        </ul>
      </div>
    </BackgroundImage>
  );
};

export default Archive;
