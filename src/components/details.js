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
        devcon0
        devcon1
        devcon2
        devcon3
        devcon4
        devcon5
      }
    }
  `);

  const devconText = devcon => {
    if (devcon === "devcon-0") {
      return data.dataYaml.devcon0;
    }
    if (devcon === "devcon-1") {
      return data.dataYaml.devcon1;
    }
    if (devcon === "devcon-2") {
      return data.dataYaml.devcon2;
    }
    if (devcon === "devcon-3") {
      return data.dataYaml.devcon3;
    }
    if (devcon === "devcon-4") {
      return data.dataYaml.devcon4;
    }
    if (devcon === "devcon-5") {
      return data.dataYaml.devcon5;
    } else {
      return "";
    }
  };

  return (
    <div>
      <Header />
      <ArchiveHero
        number={props.number}
        location={props.location}
        date={props.date}
      />
      <Navbar devcon={`devcon-${props.number}`} />
      <DetailsAbout text={devconText(`devcon-${props.number}`)} />
      <FeaturedVideo devcon={`devcon-${props.number}`} />
      {/* <FeaturedSupporters /> */}
      <Footer />
    </div>
  );
};

export default Details;
