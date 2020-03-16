import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

/* CSS */
import css from "./header.module.css";
import "../index.css";

const Header = props => {
  /* const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ethereum_foundation_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `); */
  return (
    <header className={css.header}>
      {/* Removing this logo until we have text in both black and white
      <div className={css.logoContainer}>
        <Img
          className={css.efLogo}
          fluid={data.file.childImageSharp.fluid}
          alt="Ethereum Foundation Logo"
        />
      </div> */}
      <div className={`${css.headerItem} ${css.homeLink}`}>
        <a
          className={`${css.headerLink} ${
            props.color === "white" ? css.colorWhite : css.colorBlack
          }`}
          href="/"
        >
          Devcon Archive
        </a>
      </div>
      <div className={css.headerItem}>
        <a
          className={`${css.headerLink} ${
            props.color === "white" ? css.colorWhite : css.colorBlack
          }`}
          href="https://ethereum.org"
        >
          Ethereum.org
        </a>
      </div>
      <div className={css.headerItem}>
        <a
          className={`${css.headerLink} ${
            props.color === "white" ? css.colorWhite : css.colorBlack
          }`}
          href="https://blog.ethereum.org/category/devcon/"
        >
          Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
