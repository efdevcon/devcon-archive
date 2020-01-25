import React from "react";
import css from "./footer.module.css";
import "../index.css";

const Footer = () => (
  <div className={css.footer}>
    <p className={css.copyright}>© Ethereum Foundation, 2020</p>
    <p className={css.link}><a className={css.footerLink} href="https://devcon.org">Devcon</a></p>
  </div>
);

export default Footer;
