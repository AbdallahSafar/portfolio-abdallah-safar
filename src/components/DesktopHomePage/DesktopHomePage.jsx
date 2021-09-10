import React from "react";
import logo from "./logo.svg";
import profilePic from "./profile-pic.png";
import atLogo from "./@-logo.svg";
import githubLogo from "./github-logo.svg";
import linkedinLogo from "./linkedin-logo.svg";

export default function DesktopHomePage() {
  return (
    <div id="home" className="bg-desktop-home-page w-full h-screen bg-cover">
      <div className="w-full h-full flex justify-around">
        <div className="w-2/5 h-full px-10 py-5">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <div className="mt-32">
            <h1 className="font-bold raleway text-3xl mb-20">Hi, I am</h1>
            <h1 className="font-bold raleway text-6xl mb-2">Abdallah Safar</h1>
            <h1 className="font-bold raleway text-2xl text-gray-500">
              Front-End Web Developer
            </h1>
          </div>
          <div className="flex mt-20 ml-14 w-6/12">
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
        <div className="w-2/5 h-full flex flex-col justify-between">
          <div className="w-72 bg-gray-200 mr-96"></div>
          <img src={profilePic} alt="Profile Picture" className="h-5/6 w-3/4" />
        </div>
      </div>
    </div>
  );
}
