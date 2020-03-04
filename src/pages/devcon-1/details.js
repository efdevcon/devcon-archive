import React from "react";

/* CSS */
import "../../index.css";
import "typeface-work-sans";

/* Components */
import Details from "../../components/details";

/* This page is for routing purposes only. To change page layout please edit the imported Details component */

const Devcon1Details = () => (
  <Details
    number="1"
    location="London, United Kingdom"
    date="Nov 9 - 13, 2015"
  />
);

export default Devcon1Details;
