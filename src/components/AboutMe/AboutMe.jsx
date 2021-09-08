import React from "react";
import separator from "../../images/separator.svg";
import design from "./design.svg";
import development from "./development.svg";
import maintenance from "./maintenance.svg";

export default function AboutMe() {
  return (
    <div id="aboutme" className="flex flex-col items-center w-full">
      <div className="border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold text-2xl mt-20">
        ABOUT ME
      </div>
      <div className="text-center mt-10 w-full px-20 text-lg mb-10">
        <p className="mb-5">
          My name is <i>Abdallah Safar</i>, I'm a fourth year applied Electrical
          and Telecommunication Engineering student at the Lebanese University
          in Tripoli, Lebanon. I have been learning Front-End technologies for 6
          months now and this time was just enough for me to make sure that this
          is my place in the industry.
        </p>
        <p>
          Membership in the programming club developed my coding skills, which
          quickly turned into a new hobby. I am fluent in Arabic and I have an
          intermediate level in English and French (spoken and written). Apart
          from designing and programming websites, my passion is in all kinds of
          sports - Football, Basketball, Tennis, Ping Pong.
        </p>
      </div>
      <img src={separator} alt="separator" />
      <div className="flex justify-between sm:justify-center md:justify-center flex-wrap mt-20 w-3/4 mb-10">
        <div id="design" className="w-md">
          <div className="relative w-60 mb-20">
            <img src={design} alt="design" className="absolute inset-0" />
            <h1 className="absolute top-6 left-6 text-xl font-bold">DESIGN</h1>
          </div>
          <p className="text-justify ml-7 text-lg">
            I can design the website based on your needs and suggestions. I can
            also create it from scratch by consulting with you during work.
          </p>
        </div>
        <div id="development" className="w-md">
          <div className="relative w-60 mb-20">
            <img
              src={development}
              alt="development"
              className="absolute inset-0"
            />
            <h1 className="absolute top-6 left-8 text-xl font-bold">
              DEVELOPMENT
            </h1>
          </div>
          <p className="text-justify ml-8 text-lg">
            Based on a project created by me or another one, sent by you, I can
            program the website to be fully functional and responsive.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-3/4">
        <div id="maintenance" className="w-md">
          <div className="relative w-60 mb-20">
            <img
              src={maintenance}
              alt="maintenance"
              className="absolute inset-0"
            />
            <h1 className="absolute top-6 left-8 text-xl font-bold">
              MAINTENANCE
            </h1>
          </div>
          <p className="text-justify ml-8 text-lg mb-20">
            In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.
          </p>
        </div>
      </div>
      <img src={separator} alt="separator" />
    </div>
  );
}
