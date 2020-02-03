import React from "react";

/* CSS */
import css from "./details_hero.module.css";
import "../index.css";

/* Components */
import Logo from "./logo";

const DetailsHero = (props) => (
  <div className={css.detailsHero}>
    <Logo />
    <div>
      <h1>Devcon {props.number}</h1>
      <h2>{props.location}</h2>
      <h4>{props.date}</h4>
    </div>
  </div>
);

export default DetailsHero;
