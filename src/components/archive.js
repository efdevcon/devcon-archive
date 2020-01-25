import React from "react";

/* CSS */
import css from "./archive.module.css";
import "../index.css";

/* Components */
import Logo from "./logo";

const Archive = props => (
  <div className={css.archive}>

    <div className={css.archiveCol}>
      <Logo />
    </div>

    <div className={css.archiveCol}>
      <h1>Devcon {props.number}</h1>
      <h3>{props.location}</h3>
      <h4>{props.date}</h4>
    </div>

    <div className={css.archiveCol}>
      <p className={css.archiveText}>{props.text}</p>
      <p>Details : Videos : Supporters</p>
    </div>

  </div>
);

export default Archive;
