import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Supporters from "../../components/supporters";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon4Supporters = () => (
  <div>
    <SEO title="Devcon 4 Supporters" />
    <Supporters
      number="4"
      location="Prague, Czech Republic"
      date="Oct 30 - Nov 2, 2018"
    />
  </div>
);

export default Devcon4Supporters;
