import React from "react";

/* CSS */
import css from "./button.module.css";
import "../index.css";

/* Please forgive the semantic sin of the button component being a div */
const Button = props => (
  <div className={css.button}>
    <a className={css.link} href={props.link}>
      {props.text}
    </a>
  </div>
);

export default Button;
