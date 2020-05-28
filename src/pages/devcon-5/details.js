import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Details from "../../components/details";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon5Details = () => (
  <div>
    <SEO title="Devcon 5 Details"/>
    <Details number="5" location="Osaka, Japan" date="Oct 8 - 11, 2019" />
  </div>
);

export default Devcon5Details;
