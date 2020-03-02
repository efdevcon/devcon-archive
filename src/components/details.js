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
          copy
        }
        devcon1 {
          header
          copy
        }
        devcon2 {
          header
          copy
        }
        devcon3 {
          header
          copy
        }
        devcon4 {
          header
          copy
        }
        devcon5 {
          header
          copy
        }
      }
    }
  `);

  const devconHeader = devcon => {
    if (devcon === "devcon-0") {
      return data.dataYaml.devcon0.header;
    }
    if (devcon === "devcon-1") {
      return data.dataYaml.devcon1.header;
    }
    if (devcon === "devcon-2") {
      return data.dataYaml.devcon2.header;
    }
    if (devcon === "devcon-3") {
      return data.dataYaml.devcon3.header;
    }
    if (devcon === "devcon-4") {
      return data.dataYaml.devcon4.header;
    }
    if (devcon === "devcon-5") {
      return data.dataYaml.devcon5.header;
    } else {
      return "";
    }
  };

  const devconText = devcon => {
    if (devcon === "devcon-0") {
      return data.dataYaml.devcon0.copy;
    }
    if (devcon === "devcon-1") {
      return data.dataYaml.devcon1.copy;
    }
    if (devcon === "devcon-2") {
      return data.dataYaml.devcon2.copy;
    }
    if (devcon === "devcon-3") {
      return data.dataYaml.devcon3.copy;
    }
    if (devcon === "devcon-4") {
      return data.dataYaml.devcon4.copy;
    }
    if (devcon === "devcon-5") {
      return data.dataYaml.devcon5.copy;
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
      <DetailsAbout
        header={devconHeader(`devcon-${props.number}`)}
        text={devconText(`devcon-${props.number}`)}
      />
      <FeaturedVideo devcon={`devcon-${props.number}`} />
      {/* <FeaturedSupporters /> */}
      <Footer />
    </div>
  );
};

export default Details;
