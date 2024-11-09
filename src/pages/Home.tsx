import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Footer from "./Footer";
import "../styles/style.js";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Innovate Future Foundation</title>
      </Helmet>
      <Header key="header" />
      <Banner key="banner" />
      <Page1 key="page1" />
      <Page2 key="page2" />
      <Page3 key="page3" />
      <Page4 key="page4" />
      <Footer key="footer" />
    </div>
  );
}

export default Home;
