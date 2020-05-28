import React from "react";

/* CSS */
import "../../index.css";

/* Components */
import Supporters from "../../components/supporters";
import SEO from "../../components/SEO";

/* This page is for routing purposes only. To change page layout please edit the imported Supporters component */

const Devcon3Supporters = () => (
  <div>
    <SEO title="Devcon 3 Supporters"/>
    <Supporters number="3" location="Cancún, Mexico" date="Nov 1 - 4, 2017" />
  </div>
);

export default Devcon3Supporters;
