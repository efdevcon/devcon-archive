import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Details from "../../components/details";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon3Details = () => (
  <div>
    <SEO title="Devcon 3 Details" />
    <Details number="3" location="Cancún, Mexico" date="Nov 1 - 4, 2017" />
  </div>
);

export default Devcon3Details;
