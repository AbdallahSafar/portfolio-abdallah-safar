import React, { useContext } from "react";
import { StateContext } from "../../StateProvider";
import fb from "./facebook.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";

export default function Footer() {
  const [state] = useContext(StateContext);

  return (
    <div className="w-full h-72 bg-black flex flex-col items-center">
      <div className="flex flex-col items-center mt-10 cursor-pointer">
        <a href="#home">
          <div className="h-16 flex flex-col items-center justify-between">
            <div className="relative w-10 ml-4">
              <img
                src="https://img.icons8.com/ios/50/ffffff/collapse-arrow--v1.png"
                alt=""
                className="w-6 absolute"
              />
              <img
                src="https://img.icons8.com/ios/50/ffffff/collapse-arrow--v1.png"
                alt=""
                className="w-6 absolute top-2"
              />
            </div>
            <h1
              className={`${
                state.currentLanguage === "English" && "montserrat"
              } text-xl text-white font-medium mt-10`}
            >
              {state.currentLanguage === "English"
                ? "BACK TO TOP"
                : "عودة إلى البداية"}
            </h1>
          </div>
        </a>
      </div>
      <div className="flex mt-10">
        <a
          href="https://www.facebook.com/abdallah.safar"
          target="_blank"
          className="mr-7"
        >
          <img src={fb} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/abdallahsafar"
          target="_blank"
          className="mr-7"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/Abdallah__Safar"
          target="_blank"
          className="mr-7"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png"
            alt="Twitter"
            className="w-8 h-8"
          />
        </a>
        <a href="https://linkedin.com/in/abdallahsafar" target="_blank">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
      <h1 className="mt-10 text-white text-lg">
        {state.currentLanguage === "English" ? (
          <div>
            ©2021 <i>Abdallah Safar</i> All Rights Reserved
          </div>
        ) : (
          <div>©2021 جميع الحقوق محفوظة</div>
        )}
      </h1>
    </div>
  );
}
