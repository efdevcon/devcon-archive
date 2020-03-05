import React from "react";

/* CSS */
import css from "./button.module.css";
import "../index.css";

const Button = props => <button className={css.button}>{props.text}</button>;

export default Button;
