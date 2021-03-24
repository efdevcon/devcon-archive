import React from "react";
import DevconLogo from "../images/devcon-logo.svg";

/* CSS */
import css from "./header.module.css";
import "../index.css";

const Header = () => {
  return (
    <header className={css.header}>
      <a className={`${css.headerLink}`} href="/">
        <img className={css.logo} src={DevconLogo} alt="Devcon logo" />
      </a>
      <div>
        <ul className={css.topnav}>
          <li><a href="https://devcon.org">Devcon.org</a></li>
          <li><a href="mailto:sponsorships@ethereum.org">Sponsorships</a></li>
          <li><a href="https://forum.devcon.org/">Forum</a></li>
          <li><a href="https://blog.ethereum.org/category/devcon/">Blog</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
