import React, { useContext } from "react";
import { StateContext } from "../../StateProvider";
import separator from "../../images/separator.svg";
import design from "./design.svg";
import development from "./development.svg";
import maintenance from "./maintenance.svg";

export default function AboutMe() {
  const [state] = useContext(StateContext);

  return (
    <div id="aboutme" className="flex flex-col items-center w-full">
      <div
        className={`border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold ${
          state.currentLanguage === "English" ? "text-2xl" : "text-3xl"
        } mt-20`}
      >
        {state.currentLanguage === "English" ? "ABOUT ME" : "نبذة عني"}
      </div>
      <div className="text-center xs:text-justify xs:text-xl sm:text-justify sm:text-xl mt-10 w-full px-20 xs:px-9 sm:px-12 text-lg mb-10">
        <p
          className={`mb-5 ${
            state.currentLanguage === "Arabic" && "justify-right-text text-xl"
          }`}
        >
          {state.currentLanguage === "English" ? (
            <div>
              My name is <i>Abdallah Safar</i>, I'm a fifth year applied
              Electrical and Telecommunication Engineering student at the
              Lebanese University in Tripoli, Lebanon. I have been learning
              Front-End technologies for 6 months now and this time was just
              enough for me to make sure that this is my place in the industry.
            </div>
          ) : (
            `إسمي عبد الله سفر، أدرس هندسة الإتصالات و الكهرباء في الجامعة اللبنانية في طرابلس، لبنان وقد أصبحت في سنتي الخامسة أي سنة التخرج. لقد بدأت تعلم تطوير الويب منذ 6 أشهر، وقد شكل هذا الوقت الركيزة التي جعلتني أجد نفسي في هذا المجال.`
          )}
        </p>
        <p
          className={`${
            state.currentLanguage === "Arabic" && "justify-right-text text-xl"
          }`}
        >
          {state.currentLanguage === "English"
            ? `Membership in the programming club developed my coding skills, which
          quickly turned into a new hobby. I am fluent in Arabic and I have an
          intermediate level in English and French (spoken and written). Apart
          from designing and programming websites, my passion is in all kinds of
          sports - Football, Basketball, Tennis, Ping Pong.`
            : `بسبب انتسابي لنادي البرمجة في جامعتي، تطورت عندي مهارات البرمجة، وسرعان ما تطورت لتصبح هواية جديدة. أستطيع التكلم بطلاقة في اللغة العربية، و لدي مستوى متوسط في اللغة الإنكليزية والفرنسية ( تكلم و كتابة). بغض النظر عن برمجة و تصميم المواقع الإلكترونية، لدي العديد من الهوايات و خاصة في الرياضة - كرة قدم، كرة سلة، كرة المضرب، كرة الطاولة.`}
        </p>
      </div>
      <img src={separator} alt="separator" />
      <div
        className={`flex justify-between ${
          state.currentLanguage === "Arabic" && "flex-row-reverse"
        } xs:justify-center sm:justify-center md:justify-center flex-wrap mt-20 w-3/4 xs:w-full sm:w-full mb-10`}
      >
        <div
          id="design"
          className={`w-md xs:w-10/12 sm:w-10/12 ${
            state.currentLanguage === "Arabic" && "flex flex-col items-end"
          }`}
        >
          <div className="relative w-60 mb-20 ">
            <img
              src={design}
              alt="design"
              className={
                state.currentLanguage === "English"
                  ? "absolute inset-0"
                  : "absolute top-0 right-0"
              }
            />
            <h1
              className={`absolute top-6 ${
                state.currentLanguage === "English"
                  ? "text-xl left-6"
                  : "text-2xl right-6"
              } font-bold`}
            >
              {state.currentLanguage === "English" ? "DESIGN" : "تصميم"}
            </h1>
          </div>
          <p
            className={`text-justify ml-7 text-lg sm:text-xl xs:text-xl ${
              state.currentLanguage === "Arabic" && "justify-right-text text-xl"
            }`}
          >
            {state.currentLanguage === "English"
              ? `I can design the website based on your needs and suggestions. I can
            also create it from scratch by consulting with you during work.`
              : `أستطيع أن أصمم الموقع بناء على جميع طلباتك و اقتراحاتك. بإمكاني أيضا أن أبدأ به من الصفر و ذلك تحت إشرافك أثناء العمل.`}
          </p>
        </div>
        <div
          id="development"
          className={`w-md xs:mt-8 sm:mt-8 md:mt-8 xs:w-10/12 sm:w-10/12 ${
            state.currentLanguage === "Arabic" && "flex flex-col items-end"
          }`}
        >
          <div className="relative w-60 mb-20">
            <img
              src={development}
              alt="development"
              className={
                state.currentLanguage === "English"
                  ? "absolute inset-0"
                  : "absolute top-0 right-0"
              }
            />
            <h1
              className={`absolute top-6 ${
                state.currentLanguage === "English"
                  ? "text-xl left-6"
                  : "text-2xl right-6"
              } font-bold`}
            >
              {state.currentLanguage === "English" ? "DEVELOPMENT" : "تطوير"}
            </h1>
          </div>
          <p
            className={`text-justify ml-8 text-lg sm:text-xl xs:text-xl ${
              state.currentLanguage === "Arabic" && "justify-right-text text-xl"
            }`}
          >
            {state.currentLanguage === "English"
              ? `Based on a project created by me or another one, sent by you, I can
            program the website to be fully functional and responsive.`
              : `إذا كان المشروع أساسا مبني عن طريقي أو عن طريق أحد آخر، بإمكاني أن أبرمج الموقع حتى يصبح موقع كامل و متكامل.`}
          </p>
        </div>
      </div>
      <div className="flex justify-center w-3/4 xs:w-full sm:w-full">
        <div
          id="maintenance"
          className={`w-md xs:w-10/12 sm:w-10/12 ${
            state.currentLanguage === "Arabic" && "flex flex-col items-end"
          }`}
        >
          <div className="relative w-60 mb-20">
            <img
              src={maintenance}
              alt="maintenance"
              className={
                state.currentLanguage === "English"
                  ? "absolute inset-0"
                  : "absolute top-0 right-0"
              }
            />
            <h1
              className={`absolute top-6 ${
                state.currentLanguage === "English"
                  ? "text-xl left-6"
                  : "text-2xl right-6"
              } font-bold`}
            >
              {state.currentLanguage === "English" ? "MAINTENANCE" : "صيانة"}
            </h1>
          </div>
          <p
            className={`text-justify ml-8 text-lg mb-20 sm:text-xl xs:text-xl ${
              state.currentLanguage === "Arabic" && "justify-right-text text-xl"
            }`}
          >
            {state.currentLanguage === "English"
              ? `In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.`
              : `في حال وجود أي مشكلة أو وجود ضرورة لتغيير أي شيء، أستطيع أن أقوم بإدخال ميزات و حلول جديدة.`}
          </p>
        </div>
      </div>
      <img src={separator} alt="separator" />
    </div>
  );
}
