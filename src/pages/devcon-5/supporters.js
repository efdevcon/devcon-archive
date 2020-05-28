import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Supporters from "../../components/supporters";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon5Supporters = () => (
  <div>
    <SEO title="Devcon 5 Supporters" />
    <Supporters number="5" location="Osaka, Japan" date="Oct 8 - 11, 2019" />
  </div>
);

export default Devcon5Supporters;
