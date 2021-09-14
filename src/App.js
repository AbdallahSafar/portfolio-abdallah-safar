import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import AboutMe from "./components/AboutMe/AboutMe";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";
import DesktopHomePage from "./components/DesktopHomePage/DesktopHomePage";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import MobileHomePage from "./components/MobileHomePage/MobileHomePage";

function App() {
  const [state, dispatch] = useContext(StateContext);
  let menuDisp = state.menuDisp;

  useEffect(() => {
    function handleResize() {
      dispatch({ type: "SET_SCREENWIDTH", screenWidth: window.innerWidth });
      console.log(state.screenWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      {menuDisp ? (
        <Menu />
      ) : (
        <div className="bg-gray-250">
          {state.screenWidth > 400 ? <DesktopHomePage /> : <MobileHomePage />}
          <Bio />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
