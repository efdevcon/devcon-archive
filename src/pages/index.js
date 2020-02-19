import React from "react";

import "../index.css";

/* Components */
import About from "../components/about";
import Archives from "../components/archives";
import Devcon6 from "../components/devcon6";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

const Index = () => (
  <div className="home">
    <Header />

    <Hero />

    <Devcon6 />

    <Archives />

    <About />

    <Footer />
  </div>
);

export default Index;
