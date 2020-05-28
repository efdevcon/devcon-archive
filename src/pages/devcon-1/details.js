import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Details from "../../components/details";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon1Details = () => (
  <div>
    <SEO title="Devcon 1 Details"/>
    <Details
      number="1"
      location="London, United Kingdom"
      date="Nov 9 - 13, 2015"
    />
  </div>
);

export default Devcon1Details;
