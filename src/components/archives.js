import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./archives.module.css";
import "../index.css";

/* Components */
import Archive from "./archive";

const Archives = () => {
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
    <div className={css.archives}>
      <Archive
        number="0"
        location="Berlin, Germany"
        date="Nov 24 - 28, 2014"
        text={devconText("devcon-0")}
      />

      <Archive
        number="1"
        location="London, United Kingdom"
        date="Nov 9 - 13, 2015"
        text={devconText("devcon-1")}
      />

      <Archive
        number="2"
        location="Shanghai, China"
        date="Sep 19 - 21, 2016"
        text={devconText("devcon-2")}
      />

      <Archive
        number="3"
        location="Cancún, Mexico"
        date="Nov 1 - 4, 2017"
        text={devconText("devcon-3")}
      />

      <Archive
        number="4"
        location="Prague, Czech Republic"
        date="Oct 30 - Nov 2, 2018"
        text={devconText("devcon-4")}
      />

      <Archive
        number="5"
        location="Osaka, Japan"
        date="Oct 8 - 11, 2019"
        text={devconText("devcon-5")}
      />
    </div>
  );
};

export default Archives;
