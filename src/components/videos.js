import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./videos.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Videos = props => {
  const data = useStaticQuery(graphql`
    query {
      allVideosYaml {
        edges {
          node {
            devcon
            data {
              url
              title
              speakers
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <Header />
      <ArchiveHero
        number={props.number}
        location={props.location}
        date={props.date}
      />
      <Navbar devcon={`devcon-${props.number}`} />
      <main>
        <div className={css.filters}>
          All | Main Stage | Second Stage | Breakout Rooms
        </div>
        <div className={css.videos}>
          {data.allVideosYaml.edges.map((edge, index) => (
            <div className={css.videosGrid} key={index}>
              {edge.node.devcon === `devcon-${props.number}` &&
                edge.node.data.map(video => (
                  <div className={css.videoCard}>
                    <iframe
                      frameborder="0"
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowfullscreen
                    />
                    <p className={css.title}>{video.title}</p>
                    <p className={css.speakers}>By {video.speakers}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
