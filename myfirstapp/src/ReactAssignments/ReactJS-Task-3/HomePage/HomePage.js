import React from "react";
import "./HomePage.css";

import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div id="app">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
