import React, { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <div>
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/menu.png"
        alt="menu-icon"
        className="hidden sm:block absolute right-10 top-7"
      />
      <div className="flex justify-between items-center w-full md:w-lg md:absolute md:right-5 sm:hidden">
        <a
          href="#aboutme"
          className="text-white montserrat text-lg font-semibold"
        >
          About me
        </a>
        <a
          href="#skills"
          className="text-white montserrat text-lg font-semibold"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-white montserrat text-lg font-semibold"
        >
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1C29xNC0kjKF4LOYj6XcI099ww-_PYxDq/view?usp=sharing"
          target="_blank"
          className="text-white montserrat text-lg font-semibold"
        >
          Resume
        </a>
        <div className="bg-white rounded-full h-9 w-36 flex justify-center items-center">
          <a href="#contact-me" className="montserrat text-md font-bold">
            CONTACT ME
          </a>
        </div>
      </div>
    </div>
  );
}
