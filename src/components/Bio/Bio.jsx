import React from "react";
// import ITB from "./LogoITB1.png";

export default function Bio() {
  return (
    <div className="w-full h-80 bio-bg-color flex justify-between">
      <div className="ml-14">
        <h1 className="capitalize montserrat text-gray-200 font-semibold mt-6 mb-6 text-3xl">
          BIO
        </h1>
        <p className="w-10/12 text-gray-200 text-lg text-justify">
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
          <div className="text-gray-200 mt-3 font-medium border-l-4 border-r-4 border-gray-200 w-28 h-7 montserrat bg-transparent cursor-pointer text-center">
            MORE
          </div>
        </a>
      </div>
      <div className="bg-BioITB w-full width-test bg-cover mr-16"></div>
    </div>
  );
}
