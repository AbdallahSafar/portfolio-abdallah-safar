import React from "react";
import logo from "./logo.svg";
import profilePic from "./profile-pic.png";
import atLogo from "./@-logo.svg";
import githubLogo from "./github-logo.svg";
import linkedinLogo from "./linkedin-logo.svg";
import Navbar from "../Navbar/Navbar";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useContext } from "react/cjs/react.development";
import { StateContext } from "../../StateProvider";

export default function DesktopHomePage() {
  const [state] = useContext(StateContext);

  return (
    <div
      id="home"
      className="bg-desktop-home-page w-full h-screen bg-cover md:bg-center"
    >
      <div className="w-full h-full flex justify-around relative">
        <div className="w-2/5 h-full px-10 py-5">
          <div className="flex justify-between items-center w-5/12">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <LanguageSwitch />
          </div>
          <div
            className={
              state.currentLanguage === "Arabic"
                ? "mt-32 mr-20 text-right"
                : "mt-32"
            }
          >
            <h1
              className={
                state.currentLanguage === "English"
                  ? "font-bold raleway text-3xl mb-20"
                  : "font-bold raleway text-4xl mb-20"
              }
            >
              {state.currentLanguage === "English" ? "Hi, I am" : "مرحبا، أنا"}
            </h1>
            <h1
              className={
                state.currentLanguage === "English"
                  ? "font-bold raleway text-6xl mb-2"
                  : "font-bold raleway text-7xl mb-2"
              }
            >
              {state.currentLanguage === "English"
                ? "Abdallah Safar"
                : "عبد الله سفر"}
            </h1>
            <h1
              className={
                state.currentLanguage === "English"
                  ? "font-bold raleway text-2xl text-gray-500"
                  : "font-bold raleway text-3xl text-gray-500"
              }
            >
              {state.currentLanguage === "English"
                ? "Front-End Web Developer"
                : "مطور ويب للواجهة الأمامية"}
            </h1>
          </div>
          <div
            className={
              state.currentLanguage === "English"
                ? "flex mt-20 ml-14 w-6/12"
                : "flex mt-20 ml-28 w-6/12"
            }
          >
            <a href="mailto:abdallah.safar01@gmail.com" target="_blank">
              <div className="w-14 h-12 bg-gray-350 shadow-md flex justify-center p-2 rounded mr-7">
                <img src={atLogo} alt="" />
              </div>
            </a>
            <a href="https://github.com/AbdallahSafar" target="_blank">
              <div className="w-14 h-12 bg-gray-350 shadow-md flex justify-center p-2 rounded mr-7">
                <img src={githubLogo} alt="" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/abdallahsafar" target="_blank">
              <div className="w-14 h-12 bg-gray-350 shadow-md flex justify-center p-2 rounded">
                <img src={linkedinLogo} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col justify-between md:w-5/12">
          <div className="mt-8">
            <Navbar />
          </div>
          <img src={profilePic} alt="Profile Picture" className="h-5/6 w-3/4" />
        </div>
      </div>
    </div>
  );
}
