import React from "react";

import "../index.css";

/* Components */
import Archives from "../components/archives";
import Divider from "../components/divider";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import SEO from "../components/SEO";

const Index = () => (
  <div className="home">
    <SEO title="Home" />
    <Header />

    <Hero />

    <Divider />

    <Archives />

    <Footer />
  </div>
);

export default Index;
