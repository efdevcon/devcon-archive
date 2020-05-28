import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Details from "../../components/details";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon4Details = () => (
  <div>
    <SEO title="Devcon 4 Details" />
    <Details
      number="4"
      location="Prague, Czech Republic"
      date="Oct 30 - Nov 2, 2018"
    />
  </div>
);

export default Devcon4Details;
