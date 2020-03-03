import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./header.module.css";
import "../index.css";

/* Components */
import HeaderLogo from "../components/header-logo-devcon";

const Header = () => (
  <header className={css.header}>
    <HeaderLogo />
    <Link className={css.headerLink} to="/">
      Archive
    </Link>
    <div>
      <a className={css.headerLink} href="https://blog.ethereum.org">
        Blog
      </a>
    </div>
  </header>
);

export default Header;
