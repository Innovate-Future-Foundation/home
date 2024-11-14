/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Nav2 from "./Nav2";
import Banner3 from "./Banner3";
import Content8 from "./Content8";
import Content9 from "./Content9";
import Content10 from "./Content10";
import Content11 from "./Content11";
import Content12 from "./Content12";
import Footer2 from "./Footer2";
import About from "./About";
import {
  Nav20DataSource,
  Banner30DataSource,
  Content80DataSource,
  Content90DataSource,
  Content100DataSource,
  Content110DataSource,
  Content120DataSource,
  Footer20DataSource,
  AboutDataSource,
} from "./data.source";
import "../styles/less/antMotionStyle.less";

// Custom hook to handle media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const { location = {} as Location } =
  typeof window !== "undefined" ? window : {};

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [show, setShow] = useState(!location.port);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // DVA 2.0 specific code
    if (location.port) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  const children = [
    <Nav2
      id="Nav2_0"
      key="Nav2_0"
      dataSource={Nav20DataSource}
      isMobile={isMobile}
    />,
    <Banner3
      id="Banner3_0"
      key="Banner3_0"
      dataSource={Banner30DataSource}
      isMobile={isMobile}
    />,
    <Content8
      id="Content8_0"
      key="Content8_0"
      dataSource={Content80DataSource}
      isMobile={isMobile}
    />,
    <Content9
      id="Content9_0"
      key="Content9_0"
      dataSource={Content90DataSource}
      isMobile={isMobile}
    />,
    <Content10
      id="Content10_0"
      key="Content10_0"
      dataSource={Content100DataSource}
      isMobile={isMobile}
    />,
    <Content11
      id="Content11_0"
      key="Content11_0"
      dataSource={Content110DataSource}
    />,
    <Content12
      id="Content12_0"
      key="Content12_0"
      dataSource={Content120DataSource}
      isMobile={isMobile}
    />,
    <About
      id="About_0"
      key="About_0"
      dataSource={AboutDataSource}
      isMobile={isMobile}
    />,
    <Footer2
      id="Footer2_0"
      key="Footer2_0"
      dataSource={Footer20DataSource}
      isMobile={isMobile}
    />,
  ];

  return (
    <div className="templates-wrapper" ref={domRef}>
      <Helmet>
        <title>Innovate Future Foundation</title>
      </Helmet>
      {show && children}
    </div>
  );
};

export default Home;
