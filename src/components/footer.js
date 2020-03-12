import React from "react";

/* CSS */
import css from "./footer.module.css";
import "../index.css";

const Footer = () => (
  <footer className={css.footer}>
    <ul className={css.topRow}>
      <li className={css.link}>
        <a className={css.footerLink} href="https://devcon.org">
          Devcon
        </a>
      </li>
      <li className={css.divider}>|</li>
      <li className={css.link}>
        <a
          className={css.footerLink}
          href="https://blog.ethereum.org/category/devcon/"
        >
          Blog
        </a>
      </li>
      <li className={css.divider}>|</li>
      <li className={css.link}>
        <a
          className={`${css.footerLink} ${css.iconTwitter}`}
          href="https://twitter.com/EFDevcon"
        >
          Twitter
        </a>
      </li>
    </ul>
    <p className={css.copyright}>© Ethereum Foundation, 2020</p>
  </footer>
);

export default Footer;
