import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./header.module.css";
import "../index.css";

const Header = props => (
  <header className={css.header}>
    <div className={css.headerItem}>
      <a
        className={`${css.headerLink} ${
          props.color === "white" ? css.colorWhite : css.colorBlack
        }`}
        href="https://devcon.org"
      >
        Devcon.org
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

export default Header;
