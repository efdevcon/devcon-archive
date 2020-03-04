import React from "react";

/* CSS */
import css from "./about.module.css";
import "../index.css";

const About = () => (
  <div className={css.devconAbout} id="devcon-about">
    <div className={css.container}>
      <h3>What is Devcon?</h3>
      <p className={css.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export default About;
