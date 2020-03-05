import React from "react";

/* CSS */
import css from "./archive.module.css";
import "../index.css";

/* Components */
import Button from "./button";
import Logo from "./logo";

const Archive = props => {
  const backgroundClass = css[`dc${props.number}Background`];

  return (
    <div className={`${css.archive} ${backgroundClass}`}>
      <div className={css.archiveCol}>
        <Logo />
      </div>

      <div className={css.archiveCol}>
        <h1>{props.header}</h1>
        <h3>{props.location}</h3>
        <h4>{props.date}</h4>
      </div>

      <div className={css.archiveCol}>
        <p className={css.archiveText}>{props.text}</p>
        <div className={css.buttonContainer}>
          <Button
            devconNum={props.number}
            link={`./devcon-${props.number}/details`}
          >
            Details
          </Button>

          <Button
            devconNum={props.number}
            link={`./devcon-${props.number}/videos`}
          >
            Videos
          </Button>
          {/*
          <Link
            className={css.archiveLink}
            to={`devcon-${props.number}/supporters`}
          >
            Supporters
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Archive;
