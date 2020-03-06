import React from "react";

/* CSS */
import css from "./archive.module.css";
import "../index.css";

/* Components */
import Logo from "./logo";

const Archive = props => {
  const backgroundClass = css[`dc${props.number}Background`];
  const gradientClass = css[`dc${props.number}Gradient`];
  const hoverClass = css[`dc${props.number}Hover`];

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
        <ul className={`${css.archiveLinks} ${gradientClass}`}>
          <li className={css.archiveLink}>
            <a
              className={`${hoverClass}`}
              href={`./devcon-${props.number}/details`}
            >
              Details
            </a>
          </li>
          <li className={css.archiveLink}>|</li>
          <li className={css.archiveLink}>
            <a
              className={`${hoverClass}`}
              href={`./devcon-${props.number}/videos`}
            >
              {" "}
              Videos
            </a>
          </li>
          {/*
          <Link
            className={css.archiveLink}
            to={`devcon-${props.number}/supporters`}
          >
            Supporters
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Archive;
