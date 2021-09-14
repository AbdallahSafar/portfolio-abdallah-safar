import React, { useState, useContext } from "react";
import { StateContext } from "../../StateProvider";
import logo from "../DesktopHomePage/logo.svg";
import profilePic from "../DesktopHomePage/profile-pic.png";
import rect from "./Rectangle.svg";

export default function MobileHomePage() {
  const [state, dispatch] = useContext(StateContext);

  const showMenu = () => {
    dispatch({ type: "SHOW_MENU", menuDisp: true });
    console.log(state.menuDisp);
  };

  return (
    <div className="w-full h-screen bg-black relative">
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
        className="h-4/5 w-full absolute bottom-0 -right-10 bg-red-500"
      />
      <img src={rect} className="w-full mobile-bg-color absolute bottom-0" />
    </div>
  );
}
