import React, { useState, useContext } from "react";
import { StateContext } from "../../StateProvider";
import logo from "../DesktopHomePage/logo.svg";
import mailLogo from "../Menu/mail-logo.svg";
import githubLogo from "../Menu/github-logo.svg";
import linkedinLogo from "../Menu/linkedin-logo.svg";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

export default function MobileHomePage() {
  const [state, dispatch] = useContext(StateContext);

  const showMenu = () => {
    dispatch({ type: "SHOW_MENU", menuDisp: true });
  };

  return (
    <div id="home" className="w-full h-screen bg-mobile bg-cover relative">
      <div className="w-full flex justify-between items-center px-5 py-3">
        <div className="w-1/3 flex justify-between items-center">
          <img src={logo} alt="logo" className="w-11 h-11" />
          <LanguageSwitch />
        </div>
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/menu.png"
          alt="menu-icon"
          className="w-10 h-10 cursor-pointer"
          onClick={showMenu}
        />
      </div>
      <div className="w-full h-5/6 absolute bottom-0 bg-profile bg-cover"></div>
      <div
        className={`absolute bottom-0 w-full h-1/4 mobile-bg-color flex justify-between items-center px-4 ${
          state.currentLanguage === "Arabic" && "flex-row-reverse"
        }`}
      >
        <div
          className={`text-white ${
            state.currentLanguage === "Arabic" && "text-right"
          }`}
        >
          <h1
            className={
              state.currentLanguage === "English"
                ? "font-bold raleway text-2xl mb-3"
                : "font-bold raleway text-3xl mb-3"
            }
          >
            {state.currentLanguage === "English" ? "Hi, I am" : "مرحبا، أنا"}
          </h1>
          <h1
            className={
              state.currentLanguage === "English"
                ? "font-bold raleway text-4xl mb-0"
                : "font-bold raleway text-5xl mb-1"
            }
          >
            {state.currentLanguage === "English"
              ? "Abdallah Safar"
              : "عبد الله سفر"}
          </h1>
          <h1
            className={
              state.currentLanguage === "English"
                ? "font-bold raleway text-lg"
                : "font-bold raleway text-xl"
            }
          >
            {state.currentLanguage === "English"
              ? "Front-End Web Developer"
              : "مطور ويب للواجهة الأمامية"}
          </h1>
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
