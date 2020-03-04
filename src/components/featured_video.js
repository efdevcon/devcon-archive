import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

/* CSS */
import css from "./featured_video.module.css";
import "../index.css";

const FeaturedVideo = props => {
  const data = useStaticQuery(graphql`
    query {
      allVideosYaml {
        edges {
          node {
            devcon
            data {
              title
              featured
              speakers
              url
            }
          }
        }
      }
    }
  `);
  const videoData = data.allVideosYaml.edges[props.devconNum];
  const featuredData = videoData.node.data.filter(video => !!video.featured);

  return (
    <div className={css.featuredVideo}>
      <h2 className={css.header}>Featured Videos</h2>
      <div className={css.videoGrid}>
        {featuredData.map((video, index) => (
          <div className={css.videoCard} key={index}>
            <div className={css.iframeContainer}>
              <iframe
                frameBorder="0"
                src={video.url}
                title={video.title}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </div>
            <p className={css.title}>{video.title}</p>
            <p className={css.speakers}>By {video.speakers}</p>
          </div>
        ))}
      </div>

      <p className={css.videoLinksContainer}>
        <Link className={css.videoLinks} to={`${props.devcon}/videos`}>
          Check Out More Videos
        </Link>
      </p>
    </div>
  );
};

export default FeaturedVideo;
