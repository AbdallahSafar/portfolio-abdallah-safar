import React from "react";
// import ITB from "./LogoITB1.png";

export default function Bio() {
  return (
    <div className="w-full h-80 bio-bg-color flex justify-between">
      <div className="ml-14">
        <h1 className="capitalize montserrat text-gray-200 font-semibold mt-8 mb-7 text-3xl">
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
        <div className="text-gray-200 text-lg flex justify-between mt-5">
          <pre className="montserrat font-medium">|        MORE        |</pre>
        </div>
      </div>
      <div className="bg-test w-full width-test bg-cover mr-16"></div>
    </div>
  );
}
