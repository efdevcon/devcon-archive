import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import SEO from "../../components/SEO";
import Supporters from "../../components/supporters";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon0Supporters = () => (
  <div>
    <SEO title="Devcon 0 Supporters" />
    <Supporters
      number="0"
      location="Berlin, Germany"
      date="Nov 24 - 28, 2014"
    />
  </div>
);

export default Devcon0Supporters;
