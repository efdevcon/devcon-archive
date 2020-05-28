import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Supporters from "../../components/supporters";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon2Supporters = () => (
  <div>
    <SEO title="Devcon 2 Supporters" />
    <Supporters
      number="2"
      location="Shanghai, China"
      date="Sep 19 - 21, 2016"
    />
  </div>
);

export default Devcon2Supporters;
