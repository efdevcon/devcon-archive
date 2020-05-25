import React from "react";

import Logo from "../images/dc6_logo.svg";

/* CSS */
import css from "./logo-devcon.module.css";
import "../index.css";

const LogoDevcon = () => {
  return (
    <div className={css.logoContainer}>
      <img
        className={css.logo}
        src={Logo}
        alt="Devcon Logo"
      />
    </div>
  );
};

export default LogoDevcon;
