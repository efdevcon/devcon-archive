import React from "react";
import Logo from "../images/eth_logo_icon.svg";

/* CSS */
import css from "./header.module.css";
import "../index.css";

const Header = props => {
  return (
    <header className={css.header}>
      <a
        className={`${css.headerLink} ${
          props.color === "white" ? css.colorWhite : css.colorBlack
        } ${css.headerLogo}`}
        href="/"
      >
        <div className={css.logoContainer}>
          <img className={css.efLogo} src={Logo} alt="Eth Logo" />
          <span className="logoText">Devcon Archive</span>
        </div>
      </a>
      <div className={css.headerItem}>
        <a
          className={`${css.headerLink} ${
            props.color === "white" ? css.colorWhite : css.colorBlack
          } ${css.ethereumLink}`}
          href="https://ethereum.org"
        >
          Ethereum.org
        </a>
      </div>
      <div className={css.headerItem}>
        <a
          className={`${css.headerLink} ${
            props.color === "white" ? css.colorWhite : css.colorBlack
          } ${css.blogLink}`}
          href="https://blog.ethereum.org/category/devcon/"
        >
          Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
