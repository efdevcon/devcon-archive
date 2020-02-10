import React from "react";

/* CSS */
import css from "./videos.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Videos = props => (
  <div>
    <Header />
    <ArchiveHero
      number={props.number}
      location={props.location}
      date={props.date}
    />
    <main>
      <div className={css.filters}>
        All | Main Stage | Second Stage | Breakout Rooms
      </div>
    </main>
    <Navbar devcon={`devcon-${props.number}`} />
    <Footer />
  </div>
);

export default Videos;
