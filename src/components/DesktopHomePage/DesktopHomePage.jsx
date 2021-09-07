import React from "react";
import logo from "./logo.svg";
import profilePic from "./profile-pic.png";
import atLogo from "./@-logo.svg";
import githubLogo from "./github-logo.svg";
import linkedinLogo from "./linkedin-logo.svg";

export default function DesktopHomePage() {
  return (
    <div
      id="home"
      className="bg-desktop-home-page w-full h-screen bg-cover py-7 relative"
    >
      <div className="flex justify-between w-full">
        <div className="flex justify-end w-32">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>
        {/* <div className="w-72 bg-gray-200 mr-96"></div> Navbar */}
      </div>

      <div className="mt-24 w-full flex justify-between absolute bottom-0">
        <div className="w-6/12 h-auto">
          <div className="m-auto w-9/12 mt-32">
            <h1 className="font-bold raleway text-3xl mb-20">Hi, I am</h1>
            <h1 className="font-bold raleway text-6xl mb-2">Abdallah Safar</h1>
            <h1 className="font-bold raleway text-2xl text-gray-500">
              Front-End Web Developer
            </h1>
          </div>
          <div className="flex mx-auto mt-20 w-6/12">
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
        <img src={profilePic} alt="Profile Picture" className="h-lg w-7/12" />
      </div>

      {/* <img
          src={profilePic}
          alt="Profile Picture"
          className="h-lg w-6/12 absolute bottom-0 right-1/4 bg-blue-400"
        /> */}

      {/* <div className="flex ml-40 mt-10">
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
      </div> */}
    </div>
  );
}
