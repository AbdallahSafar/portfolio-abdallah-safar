import React, { useState, useContext } from "react";
import { StateContext } from "../../StateProvider";

export default function Navbar() {
  const [state, dispatch] = useContext(StateContext);

  const showMenu = () => {
    dispatch({ type: "SHOW_MENU", menuDisp: true });
    console.log(state.menuDisp);
  };

  return (
    <div>
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/menu.png"
        alt="menu-icon"
        className="hidden sm:block absolute right-10 top-7 cursor-pointer"
        onClick={showMenu}
      />
      <div className="flex justify-between items-center w-full md:w-lg md:absolute md:right-5 sm:hidden">
        <div className="transition-transform transform duration-500 ease-in-out hover:scale-125">
          <a
            href="#aboutme"
            className={
              state.currentLanguage === "English"
                ? "text-white montserrat text-lg font-semibold"
                : "text-white text-lg font-semibold"
            }
          >
            {state.currentLanguage === "English" ? "About me" : "نبذة عني"}
          </a>
        </div>
        <div className="transition-transform transform duration-500 ease-in-out hover:scale-125">
          <a
            href="#skills"
            className={
              state.currentLanguage === "English"
                ? "text-white montserrat text-lg font-semibold"
                : "text-white text-lg font-semibold"
            }
          >
            {state.currentLanguage === "English" ? "Skills" : "مهارات"}
          </a>
        </div>
        <div className="transition-transform transform duration-500 ease-in-out hover:scale-125">
          <a
            href="#projects"
            className={
              state.currentLanguage === "English"
                ? "text-white montserrat text-lg font-semibold"
                : "text-white text-lg font-semibold"
            }
          >
            {state.currentLanguage === "English" ? "Projects" : "مشاريع"}
          </a>
        </div>
        <div className="transition-transform transform duration-500 ease-in-out hover:scale-125">
          <a
            href="https://drive.google.com/file/d/1ExWnCdc_G3YwPeyMTY4nJ7wdKAlbhK4V/view?usp=drive_link"
            target="_blank"
            className={
              state.currentLanguage === "English"
                ? "text-white montserrat text-lg font-semibold"
                : "text-white text-lg font-semibold"
            }
          >
            {state.currentLanguage === "English" ? "Resume" : "سيرة ذاتية"}
          </a>
        </div>
        <div className="bg-white rounded-full h-9 w-36 flex justify-center items-center transition-transform transform duration-500 ease-in-out hover:scale-125">
          <a
            href="#contact-me"
            className={
              state.currentLanguage === "English"
                ? "montserrat text-md font-bold"
                : "text-md font-bold"
            }
          >
            {state.currentLanguage === "English" ? "CONTACT ME" : "تواصل معي"}
          </a>
        </div>
      </div>
    </div>
  );
}
