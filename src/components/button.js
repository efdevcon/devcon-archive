import React from "react";

/* CSS */
import css from "./button.module.css";
import "../index.css";

/* Please forgive the semantic sin of the button component being a div */
const Button = props => {
  const backgroundClass = css[`dc${props.devconNum}`];
  return (
    <a className={css.link} href={props.link}>
      <div className={`${css.button} ${backgroundClass}`}>{props.children}</div>
    </a>
  );
};

export default Button;
