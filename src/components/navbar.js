import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./navbar.module.css";
import "../index.css";
import "typeface-work-sans";

const Navbar = props => {
  const number = props.devcon.slice(-1);
  const backgroundClass = css[`dc${number}Background`];
  const highlightClass = css[`dc${number}Highlight`];

  return (
    <nav className={`${backgroundClass} ${highlightClass}`}>
      <ul className={css.navbar}>
        <li className={css.navitem}>
          <Link className={css.navlink} to={`${props.devcon}/details`}>
            Details
          </Link>
        </li>

        <li className={css.navitem}>
          <Link className={css.navlink} to={`${props.devcon}/videos`}>
            Videos
          </Link>
        </li>

        {/* <li className={css.navitem}>
        <Link className={css.navlink} to={`${props.devcon}/supporters`}>
          Supporters
        </Link>
      </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
