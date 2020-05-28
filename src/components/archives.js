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
    <div className={css.archives} id="devconArchive">
      <Archive
        number="5"
        location={devconData("devcon-5").location}
        date={devconData("devcon-5").date}
        header={devconData("devcon-5").header}
        text={devconData("devcon-5").copy}
      />

      <Archive
        number="4"
        location={devconData("devcon-4").location}
        date={devconData("devcon-4").date}
        header={devconData("devcon-4").header}
        text={devconData("devcon-4").copy}
      />

      <Archive
        number="3"
        location={devconData("devcon-3").location}
        date={devconData("devcon-3").date}
        header={devconData("devcon-3").header}
        text={devconData("devcon-3").copy}
      />

      <Archive
        number="2"
        location={devconData("devcon-2").location}
        date={devconData("devcon-2").date}
        header={devconData("devcon-2").header}
        text={devconData("devcon-2").copy}
      />

      <Archive
        number="1"
        location={devconData("devcon-1").location}
        date={devconData("devcon-1").date}
        header={devconData("devcon-1").header}
        text={devconData("devcon-1").copy}
      />

      <Archive
        number="0"
        location={devconData("devcon-0").location}
        date={devconData("devcon-0").date}
        header={devconData("devcon-0").header}
        text={devconData("devcon-0").copy}
      />
    </div>
  );
};

export default Archives;
