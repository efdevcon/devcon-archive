import React from "react";

/* CSS */
import css from "./button.module.css";
import "../index.css";

/* Please forgive the semantic sin of the button component being a div */
const Button = props => {
  const backgroundClass = css[`dc${props.devconNum}`];
  return (
    <div className={`${css.button} ${backgroundClass}`}>
      <a className={css.link} href={props.link}>
        {props.children}
      </a>
    </div>
  );
};

export default Button;
