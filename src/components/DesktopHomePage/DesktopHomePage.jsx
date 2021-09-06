import React from "react";
import logo from "./logo.svg";
import profilePic from "./profile-pic.png";
import atLogo from "./@-logo.svg";
import githubLogo from "./github-logo.svg";
import linkedinLogo from "./linkedin-logo.svg";

export default function DesktopHomePage() {
  return (
    <div className="bg-desktop-home-page w-full h-screen bg-center bg-cover py-7 relative">
      <div className="flex justify-between w-full">
        <div className="flex justify-end w-44">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>
        {/* <div className="w-72 bg-gray-200 mr-96"></div> Navbar */}
      </div>
      <div className="flex justify-between w-full h-96 items-center">
        <div className="ml-30 mt-20">
          <h1 className="font-bold raleway text-3xl mb-20">Hi, I am</h1>
          <h1 className="font-bold raleway text-6xl mb-2">Abdallah Safar</h1>
          <h1 className="font-bold raleway text-2xl text-gray-500">
            Front-End Web Developer
          </h1>
        </div>
        <img
          src={profilePic}
          alt="Profile Picture"
          className="h-lg absolute bottom-0 right-10"
        />
      </div>

      <div className="flex ml-40 mt-10">
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
  );
}
