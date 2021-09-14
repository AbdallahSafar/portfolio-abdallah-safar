import React, { useState, useContext } from "react";
import { StateContext } from "../../StateProvider";
import logo from "../DesktopHomePage/logo.svg";
import profilePic from "../DesktopHomePage/profile-pic.png";
import mailLogo from "../Menu/mail-logo.svg";
import githubLogo from "../Menu/github-logo.svg";
import linkedinLogo from "../Menu/linkedin-logo.svg";

export default function MobileHomePage() {
  const [state, dispatch] = useContext(StateContext);

  const showMenu = () => {
    dispatch({ type: "SHOW_MENU", menuDisp: true });
    console.log(state.menuDisp);
  };

  return (
    <div id="home" className="w-full h-screen bg-mobile bg-cover relative">
      <div className="w-full flex justify-between items-center px-5 py-3">
        <img src={logo} alt="logo" className="w-11 h-11" />
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/menu.png"
          alt="menu-icon"
          className="w-10 h-10 cursor-pointer"
          onClick={showMenu}
        />
      </div>
      <img
        src={profilePic}
        alt="Profile Picture"
        className="h-5/6 w-full absolute bottom-0 -right-10"
      />
      <div className="absolute bottom-0 w-full h-1/4 mobile-bg-color flex justify-between items-center px-4">
        <div className="text-white">
          <h1 className="font-bold raleway text-2xl mb-3">Hi, I am</h1>
          <h1 className="font-bold raleway text-4xl mb-0">Abdallah Safar</h1>
          <h1 className="font-bold raleway text-lg">Front-End Web Developer</h1>
        </div>
        <div className="h-5/6 flex flex-col justify-between">
          <a href="mailto:abdallah.safar01@gmail.com" target="_blank">
            <img src={mailLogo} alt="mail" className="w-9 h-9" />
          </a>
          <a href="https://github.com/AbdallahSafar" target="_blank">
            <img src={githubLogo} alt="mail" className="w-9 h-9" />
          </a>
          <a href="https://www.linkedin.com/in/abdallahsafar" target="_blank">
            <img src={linkedinLogo} alt="mail" className="w-9 h-9" />
          </a>
        </div>
      </div>
    </div>
  );
}
