import React from "react";

/* CSS */
import css from "./videos.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";


const Videos = () => (
  <div>
    <Header />
    <ArchiveHero
      number="0"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
    <main>
      <div className={css.filters}>
        All | Main Stage | Second Stage | Breakout Rooms
      </div>
    </main>
    <Navbar devcon="devcon-0" />
    <Footer />
  </div>
);

export default Videos;
