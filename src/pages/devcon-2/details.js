import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Details from "../../components/details";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon2Details = () => (
  <div>
    <SEO title="Devcon 2 Details" />
    <Details number="2" location="Shanghai, China" date="Sep 19 - 21, 2016" />
  </div>
);

export default Devcon2Details;
