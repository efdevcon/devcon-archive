import React from "react";

/* CSS */
import "../index.css";

/* Components */
import DetailsAbout from "./details_about";
import FeaturedVideo from "./featured_video";
import FeaturedSupporters from "./featured_supporters";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Details = (props) => (
  <div>
    
    <Header />

    <div>Details Hero Component</div>
    {/* TODO remove hard encoding */}
    <Navbar devcon="devcon-0" />
    <DetailsAbout />
    <FeaturedVideo />
    <FeaturedSupporters />
    <Footer />
  </div>
);

export default Details;
