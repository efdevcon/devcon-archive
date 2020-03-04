import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
/* CSS */
import css from "./footer.module.css";
import "../index.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        childImageSharp: { fixed: { originalName: { eq: "twitter_icon.png" } } }
      ) {
        childImageSharp {
          fixed(width: 32, height: 26) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={css.footer}>
      <div className={css.topRow}>
        <p className={css.link}>
          <a className={css.footerLink} href="https://devcon.org">
            Devcon
          </a>
        </p>
        <div className={css.divider}>|</div>
        <p className={css.link}>
          <a
            className={css.footerLink}
            href="https://blog.ethereum.org/category/devcon/"
          >
            Blog
          </a>
        </p>
        <div className={css.divider}>|</div>
        <div className={css.link}>
          <a className={css.footerLink} href="https://twitter.com/ethereum">
            <Img
              className={css.twitterIcon}
              fixed={data.file.childImageSharp.fixed}
              alt="Twitter link"
            />
          </a>
        </div>
        <p className={css.link}>
          <a className={css.footerLink} href="https://twitter.com/ethereum">
            Twitter
          </a>
        </p>
      </div>
      <div className={css.bottomRow}>
        <p className={css.copyright}>© Ethereum Foundation, 2020</p>
      </div>
    </div>
  );
};

export default Footer;
