import "./App.css";
import React, { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";
import DesktopHomePage from "./components/DesktopHomePage/DesktopHomePage";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      {screenWidth > 400 ? (
        <div className="bg-gray-250">
          <DesktopHomePage />
          <Bio />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default App;
