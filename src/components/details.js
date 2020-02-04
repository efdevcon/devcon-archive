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
    <ArchiveHero
      number={props.number}
      location={props.location}
      date={props.date}
    />
    <Navbar devcon={`devcon-${props.number}`} />
    <DetailsAbout />
    <FeaturedVideo />
    <FeaturedSupporters />
    <Footer />
  </div>
);

export default Details;
