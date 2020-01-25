import React from "react";
import { Link } from "gatsby";
import css from "./header.module.css";
import "../index.css";

const Header = () => (
  <header className={css.header}>
    <Link className={css.headerLink} to="/">Archive</Link>
    <div><a className={css.headerLink} href="https://blog.ethereum.org">Blog</a></div> 
  </header>
);

export default Header;
