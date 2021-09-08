import React, { useEffect, useState } from "react";
import ITB from "./LogoITB1.png";
import ITB2 from "./LogoITB2.png";

export default function Bio() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smallScreen = screenWidth < 1200 ? true : false;
  console.log(smallScreen);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="w-full bio-bg-color flex justify-between sm:justify-center">
      <div className="ml-14 sm:mx-auto sm:w-5/6 sm:flex sm:flex-col sm:items-center sm:bg-BioITB sm:bg-no-repeat sm:bg-center md:bg-BioITB md:bg-no-repeat md:bg-center">
        <h1 className="capitalize montserrat text-gray-200 font-semibold mt-6 mb-6 text-3xl sm:text-4xl">
          BIO
        </h1>
        <p className="w-10/12 text-gray-200 text-lg text-justify sm:text-xl">
          I am a programmer. My passion for coding has started in my first year
          at uni while I took my first course about the C# language, and learned
          lots of algorithms and how to be a problem solver. So because of this
          background I started self-learning by taking front end bootcamp at
          Re:coded and I started building my own projects in this domain. So
          far, I am willing to enrich my career by learning new skills and
          building new experiences in the domain of web development, so to be a
          full stack developer and not only a front end one.
        </p>
        <a href="#aboutme">
          <div className="text-gray-200 mt-3 font-medium border-l-4 border-r-4 border-gray-200 w-28 h-7 montserrat bg-transparent mb-3 text-center sm:text-xl">
            MORE
          </div>
        </a>
      </div>
      {!smallScreen && <img src={ITB} alt="" className="w-96" />}
    </div>
  );
}
