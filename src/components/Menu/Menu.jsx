import React from "react";
import logo from "../DesktopHomePage/logo.svg";
import close from "./close-x.svg";
import whiteSeparator from "./separatorWhite.svg";
import mailLogo from "./mail-logo.svg";
import githubLogo from "./github-logo.svg";
import linkedinLogo from "./linkedin-logo.svg";

export default function Menu() {
  return (
    <div className="bg-menu w-full h-screen bg-cover bg-no-repeat">
      <div className="w-full bg-black border-b-2 border-gray-200 flex justify-between items-center px-5 py-2">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <img src={close} alt="logo" className="w-9 h-9" />
      </div>
      <div className="w-full flex flex-col items-center justify-between text-white montserrat font-medium text-lg menu-bg-color">
        <div className="flex items-center h-14">
          <a href="#aboutme" className="">
            About me
          </a>
        </div>
        <div className="flex items-center h-14">
          <a href="#skills" className="">
            Skills
          </a>
        </div>
        <div className="flex items-center h-14">
          <a href="#projects" className="">
            Projects
          </a>
        </div>
        <div className="flex items-center h-14">
          <a
            href="https://drive.google.com/file/d/1C29xNC0kjKF4LOYj6XcI099ww-_PYxDq/view?usp=sharing"
            className=""
          >
            Resume
          </a>
        </div>
        <div className="w-full bg-white text-black h-14 flex justify-center items-center text-base font-semibold">
          <a href="#contact-me" className="">
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <h2 className="text-white text-3xl advent-pro mb-2">
          my name is Abdallah
        </h2>
        <h1 className="text-white text-4xl font-semibold montserrat mb-5">
          I'M A DEVELOPER
        </h1>
        <img src={whiteSeparator} alt="separator" />
        <div className="w-4/6 flex justify-between mt-10">
          <a href="mailto:abdallah.safar01@gmail.com" target="_blank">
            <img src={mailLogo} alt="mail" className="w-10 h-10" />
          </a>
          <a href="https://github.com/AbdallahSafar" target="_blank">
            <img src={githubLogo} alt="mail" className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/abdallahsafar" target="_blank">
            <img src={linkedinLogo} alt="mail" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
