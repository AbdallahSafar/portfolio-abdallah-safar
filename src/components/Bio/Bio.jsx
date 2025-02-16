import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../StateProvider";
import ITB from "./LogoITB1.png";

export default function Bio() {
  const [state] = useContext(StateContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smallScreen = screenWidth < 1200 ? true : false;

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      className={`w-full bio-bg-color flex justify-between sm:justify-center ${
        state.currentLanguage === "Arabic" && "flex-row-reverse"
      }`}
    >
      <div
        className={`px-14 ${
          state.currentLanguage === "Arabic" && "flex flex-col items-end"
        } sm:px-7 xs:px-7 xs:w-full xs:mx-auto xs:w-5/6 xs:flex xs:flex-col xs:items-center xs:bg-BioITB xs:bg-no-repeat xs:bg-center sm:w-full sm:mx-auto sm:w-5/6 sm:flex sm:flex-col sm:items-center sm:bg-BioITB sm:bg-no-repeat sm:bg-center md:bg-BioITB md:bg-no-repeat md:bg-center ${
          state.currentLanguage === "Arabic" && "text-right"
        }`}
      >
        <h1
          className={`capitalize montserrat text-gray-200 font-semibold mt-6 mb-6 text-3xl xs:text-4xl sm:text-4xl ${
            state.currentLanguage === "Arabic" && ""
          }`}
        >
          {state.currentLanguage === "English" ? "BIO" : "سيرة ذاتية"}
        </h1>
        <p
          className={`w-11/12 text-gray-200 text-lg text-justify xs:text-xl sm:text-xl ${
            state.currentLanguage === "Arabic" && "justify-right-text"
          }`}
        >
          {state.currentLanguage === "English"
            ? `I am a Computer and Communication Engineer with expertise in software development, systems integration, and WMS customization. With a proven track record of stabilizing critical projects and delivering innovative solutions tailored to client needs, I am passionate about problem-solving and continuous learning. I strive to optimize business processes through technology and innovation.

            In addition to my backend and systems expertise, I have experience in web development, building and optimizing web applications to create seamless user experiences. I am always eager to expand my skill set and stay up to date with the latest web technologies.`
            : `أنا مهندس حاسوب واتصالات متخصص في تطوير البرمجيات، تكامل الأنظمة، وتخصيص أنظمة إدارة المخازن. لدي سجل حافل في استقرار المشاريع الحيوية وتقديم حلول مبتكرة تتناسب مع احتياجات العملاء. أنا شغوف بحل المشكلات والتعلم المستمر، وأسعى لتحسين العمليات التجارية من خلال التكنولوجيا والابتكار.

            بالإضافة إلى خبرتي في البرمجة الخلفية وتكامل الأنظمة، لدي خبرة في تطوير الويب، حيث أعمل على بناء وتحسين تطبيقات الويب لإنشاء تجارب مستخدم سلسة. أنا دائمًا متحمس لتوسيع مجموعة مهاراتي ومواكبة أحدث تقنيات الويب.`}
        </p>
        <a href="#aboutme">
          <div
            className={`text-gray-200 mt-3 font-medium border-l-4 border-r-4 border-gray-200 w-28 h-7 ${
              state.currentLanguage === "English" ? "montserrat" : ""
            } bg-transparent mb-3 text-center xs:text-xl xs:mt-5 sm:text-xl sm:mt-5`}
          >
            {state.currentLanguage === "English" ? "MORE" : "المزيد"}
          </div>
        </a>
      </div>
      {!smallScreen && <img src={ITB} alt="" className="w-96" />}
    </div>
  );
}
