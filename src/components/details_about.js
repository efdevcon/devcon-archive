import React from "react";

/* CSS */
import css from "./details_about.module.css";
import "../index.css";

const DetailsAbout = props => (
  <div className={css.about}>
    <div className={css.aboutColumn}>TODO: Image goes here</div>
    <div className={css.aboutColumn}>
      <h2>Devcon Header Text</h2>
      <p className={css.aboutText}>{props.text}</p>
    </div>
  </div>
);

export default DetailsAbout;
