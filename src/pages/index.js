import React from "react";

const Index = () => (
  <div className="home">
    { /* Hero Component */}
    <div className="hero">
      {/* Navbar Component */}
      <div>Navbar here</div>
      <div>Devcon Icon here</div>
      <h1>Devcon</h1>
      <p>Annual conference for all Ethereum developers, researchers, thinkers, and makers</p>
      { /* Call to Action/Anchor Tag Component */ }
      <p className="call-to-action">Read More</p>
    </div>
   
    { /* Devcon 6 Component */}
    <div className="devcon-6-bar">
      <h4>Devcon 6: October 2020. More info coming soon.</h4>
    </div>

    { /* Devcon Archive Component */ }
    <div className="devcon-archive">Devcon Archive</div>

    { /* Devcon About Component */}
    <div className="devcon-about">
      <h3>What is Devcon?</h3>
      <p>Lorem ipsum...</p>
    </div>

    { /* Devcon Footer Component */}
    <div className="footer">
      <div className="copyright"> (c) Ethereum Foundation, 2020</div>
      <div className="link"><a href="https://devcon.org">Devcon</a></div>
    </div>
  </div>
);

export default Index;
