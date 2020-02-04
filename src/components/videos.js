import React from "react";

/* CSS */
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
      numer="0"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
    <Navbar devcon="0" />
    <Footer />
  </div>
);

export default Videos;
