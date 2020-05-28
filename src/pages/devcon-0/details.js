import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import SEO from "../../components/SEO";
import Details from "../../components/details";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon0Details = () => (
  <div>
    <SEO title="Devcon 0 Details" />
    <Details number="0" location="Berlin, Germany" date="Nov 24 - 28, 2014" />
  </div>
);

export default Devcon0Details;
