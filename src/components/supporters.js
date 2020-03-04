import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* CSS */
import css from "./supporters.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Supporters = props => {
  /* TODO replace query when S3 image hosting is up*/
  const data = useStaticQuery(graphql`
    query {
      allSupportersYaml {
        edges {
          node {
            devcon
            tiers {
              tier
              supporters {
                name
              }
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
        {data.allSupportersYaml.edges.map((edge, index) => (
          <div key={index}>
            {edge.node.devcon === `devcon-${props.number}` &&
              edge.node.tiers.map(supporterTier => (
                <div>
                  <h2 className={css.tier}>{supporterTier.tier}</h2>
                  <div className={css.supporters}>
                    {supporterTier.supporters.map(supporter => (
                      <p className={css.logo}>{supporter.name}</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Supporters;
