import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./header.module.css";
import "../index.css";

/* Components */
import HeaderLogo from "../components/header-logo-devcon";

const Header = () => (
  <header className={css.header}>
    <Link className={css.headerLinkLogo} to="/">
      <HeaderLogo />
    </Link>
    <div>
      <a className={css.headerLink} href="https://devcon.org">
        Devcon.org
      </a>
    </div>
    <div>
      <a
        className={css.headerLink}
        href="https://blog.ethereum.org/category/devcon/"
      >
        Blog
      </a>
    </div>
  </header>
);

export default Header;
