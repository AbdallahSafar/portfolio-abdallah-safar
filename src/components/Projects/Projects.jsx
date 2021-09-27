import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moviesApp from "./MoviesApp.png";
import satisfyingFood1 from "./satisfyingFood1.jpg";
import satisfyingFood2 from "./satisfyingFood2.jpg";
import walletApp from "./WalletApp.png";
import HMS1 from "./HMS1.png";
import HMS2 from "./HMS2.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
  },
};

export default function Projects() {
  return (
    <div id="projects" className="mt-20 mb-10">
      <div className="flex justify-center items-center w-full h-60 bg-projects bg-cover bg-center xs:bg-top">
        <div className="border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold text-2xl">
          PROJECTS
        </div>
      </div>
      <div className="bio-bg-color w-full h-20 flex flex-col justify-center items-center">
        <h1 className="text-gray-300 text-lg montserrat">ALL</h1>
        <div className="border-t-2 border-gray-300 w-40 mt-2"></div>
      </div>
      <div className="bg-black-700">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          <div className="h-semilg flex flex-col items-center bio-bg-color px-2">
            <img src={moviesApp} alt="" className="h-5/6" />
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Movies App
            </h1>
            <div className="flex justify-between w-1/3 text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://prnhj.csb.app/"
                target="_blank"
                className="hover:text-gray-500"
              >
                DEMO
              </a>
              <h1 className="text-xl">|</h1>
              <a
                href="https://codesandbox.io/s/react-movies-project-prnhj"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="h-semilg w-full flex flex-col items-center bio-bg-color pr-2">
            <img src={HMS1} alt="" className="h-5/6" />
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Hospital Management System
            </h1>
            <div className="text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://github.com/AbdallahSafar/Hospital-Management-System"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="h-semilg w-full flex flex-col items-center bio-bg-color pr-2">
            <img src={HMS2} alt="" className="h-5/6" />
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Hospital Management System
            </h1>
            <div className="text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://github.com/AbdallahSafar/Hospital-Management-System"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="h-semilg w-full flex flex-col items-center bio-bg-color pr-2">
            <div className="overflow-y-auto w-full h-5/6">
              <img src={satisfyingFood1} alt="" className="w-full" />
            </div>
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Satisfying Food
            </h1>
            <div className="flex justify-between w-1/3 text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://satisfying-food.netlify.app/"
                target="_blank"
                className="hover:text-gray-500"
              >
                DEMO
              </a>
              <h1 className="text-xl">|</h1>
              <a
                href="https://github.com/Lebanon-02-WBC-Capstones/satisfying-food-web"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="h-semilg w-full flex flex-col items-center bio-bg-color pr-2">
            <div className="overflow-y-auto w-full h-5/6">
              <img src={satisfyingFood2} alt="" className="w-full" />
            </div>
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Satisfying Food
            </h1>
            <div className="flex justify-between w-1/3 text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://satisfying-food.netlify.app/"
                target="_blank"
                className="hover:text-gray-500"
              >
                DEMO
              </a>
              <h1 className="text-xl">|</h1>
              <a
                href="https://github.com/Lebanon-02-WBC-Capstones/satisfying-food-web"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="h-semilg w-full flex flex-col items-center bio-bg-color">
            <img src={walletApp} alt="" className="h-5/6" />
            <h1 className="montserrat italic text-lg text-gray-300 mt-2">
              Wallet App
            </h1>
            <div className="flex justify-between w-1/3 text-lg text-gray-300 font-bold montserrat mt-5">
              <a
                href="https://c02o6.csb.app/"
                target="_blank"
                className="hover:text-gray-500"
              >
                DEMO
              </a>
              <h1 className="text-xl">|</h1>
              <a
                href="https://codesandbox.io/s/wallet-app-c02o6"
                target="_blank"
                className="hover:text-gray-500"
              >
                CODE
              </a>
            </div>
          </div>
        </Carousel>
        <div className="bio-bg-color w-full h-20 flex flex-col justify-end items-center">
          <h1 className="text-gray-200 text-lg montserrat mb-2">
            And many more to come!
          </h1>
        </div>
      </div>
      ;
    </div>
  );
}
