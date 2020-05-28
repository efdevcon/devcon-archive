import React from "react";
import Arrow from "../images/devcon-archive-arrow.svg";

/* CSS */
import css from "./divider.module.css";
import "../index.css";

export default () => {
  return (
    <a className={css.anchorLink} href="#devconArchive">
    <div className={css.divider}>
      <img src={Arrow} className={css.arrow} alt="Arrow pointing down" />
      <p className={css.dividerText}>Devcon Archive</p>
    </div>
    </a>
  )
}
