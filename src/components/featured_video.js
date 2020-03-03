import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

/* CSS */
import css from "./featured_video.module.css";
import "../index.css";

const FeaturedVideo = props => {

  return (
    <div className={css.featuredVideo}>
      <h2 className={css.header}>Featured Videos</h2>
      <div className={css.videos}>
        <div className={css.video}>Video 1</div>
        <div className={css.video}>Video 2</div>
        <div className={css.video}>Video 3</div>
      </div>
      <p>
        <Link className={css.videoLinks} to={`${props.devcon}/videos`}>
          Check Out More Videos
        </Link>
      </p>
    </div>
  );
};

export default FeaturedVideo;
