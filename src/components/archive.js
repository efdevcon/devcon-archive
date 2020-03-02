import React from "react";
import { Link } from "gatsby";

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
      <p>
        <Link className={css.archiveLink} to={`devcon-${props.number}/details`}>
          Details
        </Link>{" "}
        :{" "}
        <Link className={css.archiveLink} to={`devcon-${props.number}/videos`}>
          Videos
        </Link>{" "}
        {/*
        <Link
          className={css.archiveLink}
          to={`devcon-${props.number}/supporters`}
        >
          Supporters
        </Link> */}
      </p>
    </div>
  </div>
);

export default Archive;
