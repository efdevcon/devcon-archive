import React from "react";

/* CSS */
import css from "./supporters.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Supporters = () => (
  <div>
    <Header />
    <ArchiveHero
      number="0"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
    <Navbar devcon="devcon-0" />
    <Footer />
  </div>
);

export default Supporters;
