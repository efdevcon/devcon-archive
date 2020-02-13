import React from "react";

/* CSS */
import css from "./video_card.module.css";
import "../index.css";

const VideoCard = props => (
  <div className={css.videoCard}>
    <iframe
      src={props.url}
      title={props.title}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    <p className={css.title}>{props.title}</p>
    <p className={css.speakers}>By {props.speakers}</p>
  </div>
);

export default VideoCard;
