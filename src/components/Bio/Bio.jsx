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
            ? `I am a programmer. My passion for coding has started in my first year
          at uni while I took my first course about the C# language, and learned
          lots of algorithms and how to be a problem solver. So because of this
          background I started self-learning by taking front end bootcamp at
          Re:coded and I started building my own projects in this domain. So
          far, I am willing to enrich my career by learning new skills and
          building new experiences in the domain of web development, so to be a
          full stack developer and not only a front end one.`
            : `أنا مبرمج. لقد بدأ شغفي تجاه البرمجة و تطوير البرامج في سنتي الأولى في الجامعة، حيث تعلمت أول لغة برمجة و هي لغة C#. أثناء تعلمي لهذه اللغة، أخذت الكثير من الخوارزميات و زادت عندي المهارات التي جعلتني أقوم بحل المشاكل بشكل أسرع. وبسبب هذه الخلفية، بدأت التعلم لوحدي حيث بدأت تعلم تطوير الويب عن طريق أخذ دورة مع جمعية Re:coded حيث بدأت بتطوير البرامج الخاصة بي في هذا المجال. 
            للمدى البعيد، أسعى دوما لزيادة مهاراتي و تطوير حياتي المهنية عن طريق بناء خبرات جديدة بحيث أصبح مطور شامل و ليس فقط مطور واجهة أمامية.`}
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
