import React from "react";

/* CSS */
import "../index.css";

/* Components */
import ArchiveHero from "./archive_hero";
import DetailsAbout from "./details_about";
import FeaturedVideo from "./featured_video";
import FeaturedSupporters from "./featured_supporters";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Details = (props) => (
  <div>
    
    <Header />
    {/* TODO remove hard encoding */}
    <ArchiveHero
      number="1"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
    <Navbar devcon="devcon-0" />
    <DetailsAbout />
    <FeaturedVideo />
    <FeaturedSupporters />
    <Footer />
  </div>
);

export default Details;
