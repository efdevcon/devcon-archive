import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Supporters from "../../components/supporters";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon1Supporters = () => (
  <div>
    <SEO title="Devcon 1 Supporters" />
    <Supporters
      number="1"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
  </div>
);

export default Devcon1Supporters;
