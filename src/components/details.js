import React from "react";

/* CSS */
import "../index.css";

/* Components */
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Details = (props) => (
  <div>
    
    <Header />

    <div>Details Hero Component</div>
    {/* TODO remove hard encoding */}
    <Navbar devcon="devcon-0" />
    <div>Details About Component</div>
    <div>Featured Videos Component</div>
    <div>Featured Supporters Component</div>
    <Footer />
  </div>
);

export default Details;
