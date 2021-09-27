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
        <a
          href="https://drive.google.com/file/d/1C29xNC0kjKF4LOYj6XcI099ww-_PYxDq/view?usp=sharing"
          target="_blank"
          className={
            state.currentLanguage === "English"
              ? "text-white montserrat text-lg font-semibold"
              : "text-white text-lg font-semibold"
          }
        >
          {state.currentLanguage === "English" ? "Resume" : "سيرة ذاتية"}
        </a>
        <div className="bg-white rounded-full h-9 w-36 flex justify-center items-center">
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
