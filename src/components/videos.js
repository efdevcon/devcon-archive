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
import VideoCard from "./video_card";

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
        <div>
          {data.allVideosYaml.edges.map((edge, index) => (
            <div key={index}>
              <ul>
                {edge.node.devcon === `devcon-${props.number}` &&
                  edge.node.data.map(video => (
                    <VideoCard
                      src={video.url}
                      title={video.title}
                      speakers={video.speakers}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
