import React from "react";

/* CSS */
import css from "./hero.module.css";
import "../index.css";

/* Components */
import Logo from "./logo";

const Hero = () => (
  <div className={css.hero}>
    <Logo />
    <h2>Netlify preview for pull requests test</h2>
    <p className={css.heroText}>Annual conference for all Ethereum developers, researchers, thinkers, and makers</p>
    <p className={css.callToAction}><a className={css.callToActionLink} href="#devcon-about">Read More</a></p>
  </div>
);

export default Hero;
