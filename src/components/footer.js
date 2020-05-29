import React from "react";

/* CSS */
import css from "./footer.module.css";
import "../index.css";

const Footer = () => (
  <footer className={css.footer}>
    {/* EF Links */}
    <div className={css.row}>
      <div className={css.link}>
        <a
          className={css.footerLink}
          href="https://blog.ethereum.org/category/devcon/"
        >
          Blog
        </a>
      </div>

      <div className={css.link}>
        <a className={`${css.footerLink}`} href="https://twitter.com/EFDevcon">
          Twitter
        </a>
      </div>

      <div className={css.link}>
        <a className={css.footerLink} href="https://ethereum.foundation">
          Ethereum Foundation
        </a>
      </div>


    {/* Legal */}

      <div className={css.link}>
        <a
          className={css.footerLink}
          href="https://ethereum.org/cookie-policy/"
        >
          Cookie Policy
        </a>
      </div>

      <div className={css.link}>
        <a
          className={css.footerLink}
          href="https://ethereum.org/privacy-policy/"
        >
          Privacy Policy
        </a>
      </div>

      <div className={css.link}>
        <a className={css.footerLink} href="https://ethereum.org/terms-of-use/">
          Terms of Use
        </a>
      </div>
    </div>

    {/* Copyright */}
    <p className={css.copyright}>© Ethereum Foundation, 2020</p>
  </footer>
);

export default Footer;
