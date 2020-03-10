import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import DetailsAbout from "./details_about";
import FeaturedVideo from "./featured_video";
/* import FeaturedSupporters from "./featured_supporters"; */
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Details = props => {
  const data = useStaticQuery(graphql`
    query {
      dataYaml {
        devcon0 {
          header
          location
          date
          copy
        }
        devcon1 {
          header
          location
          date
          copy
        }
        devcon2 {
          header
          location
          date
          copy
        }
        devcon3 {
          header
          location
          date
          copy
        }
        devcon4 {
          header
          location
          date
          copy
        }
        devcon5 {
          header
          location
          date
          copy
        }
      }
    }
  `);

  const devconData = devcon => {
    const devconKey = devcon.replace("-", "");
    if (data.dataYaml[devconKey]) {
      return data.dataYaml[devconKey];
    } else {
      return "";
    }
  };

  return (
    <div>
      <Header color="white" />
      <ArchiveHero
        number={props.number}
        location={props.location}
        date={props.date}
      />
      <Navbar devcon={`devcon-${props.number}`} />
      <DetailsAbout
        header={devconData(`devcon-${props.number}`).header}
        text={devconData(`devcon-${props.number}`).copy}
        number={props.number}
      />
      <FeaturedVideo
        devconNum={props.number}
        devcon={`devcon-${props.number}`}
      />
      {/* <FeaturedSupporters /> */}
      <Footer />
    </div>
  );
};

export default Details;
