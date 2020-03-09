import React from "react";
import { Link } from "gatsby";
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
      file(relativePath: { eq: "background-devcon0@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data)

  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      className={`${css.archive} ${backgroundClass}`}>
        
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
          <li className={css.archiveLink}>
            <a
              className={`${hoverClass}`}
              href={`./devcon-${props.number}/details`}
            >
              Details
            </a>
          </li>
          <li className={css.archiveLink}>|</li>
          <li className={css.archiveLink}>
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
