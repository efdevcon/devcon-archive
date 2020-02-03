import React from "react";

/* CSS */
import css from "./featured_supporters.module.css";
import "../index.css";

const FeaturedSupporters = () => (
  <div className={css.featuredSupporters}>
    <h2>Serenity Supporters</h2>
    <div className={css.featuredLogos}>
      <div className={css.logo}>Logo 1</div>
      <div className={css.logo}>Logo 2</div>
      <div className={css.logo}>Logo 3</div>
    </div>
    <p>Check Out More Supporters</p>
  </div>
);

export default FeaturedSupporters;
