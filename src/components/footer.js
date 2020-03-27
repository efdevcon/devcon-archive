import React from "react";

/* CSS */
import css from "./footer.module.css";
import "../index.css";

const Footer = () => (
  <footer className={css.footer}>
    {/* EF Links */}
    <ul className={css.row}>
      <li className={css.link}>
        <a className={css.footerLink} href="https://devcon.org">
          Devcon
        </a>
      </li>

      <li className={css.link}>
        <a
          className={css.footerLink}
          href="https://blog.ethereum.org/category/devcon/"
        >
          Blog
        </a>
      </li>

      <li className={css.link}>
        <a className={`${css.footerLink}`} href="https://twitter.com/EFDevcon">
          Twitter
        </a>
      </li>
    </ul>

    {/* Legal */}
    <ul className={css.row}>
      <li className={css.link}>
        <a
          className={css.footerLink}
          href="https://ethereum.org/cookie-policy/"
        >
          Cookie Policy
        </a>
      </li>

      <li className={css.link}>
        <a
          className={css.footerLink}
          href="https://ethereum.org/privacy-policy/"
        >
          Privacy Policy
        </a>
      </li>

      <li className={css.link}>
        <a className={css.footerLink} href="https://ethereum.org/terms-of-use/">
          Terms of Use
        </a>
      </li>
    </ul>

    {/* Copyright */}
    <p className={css.copyright}>© Ethereum Foundation, 2020</p>
  </footer>
);

export default Footer;
