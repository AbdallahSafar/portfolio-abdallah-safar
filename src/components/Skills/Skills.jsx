import React, { useContext } from "react";
import Skill from "./Skill";
import { learning, otherSkills, usingNow } from "../../MySkills";
import { StateContext } from "../../StateProvider";

export default function Skills() {
  const [state] = useContext(StateContext);

  return (
    <div id="skills" className="flex flex-col items-center w-full">
      <div
        className={`border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold ${
          state.currentLanguage === "English" ? "text-2xl" : "text-3xl"
        } mt-20`}
      >
        {state.currentLanguage === "English" ? "SKILLS" : "مهارات"}
      </div>
      <div
        className={`w-8/12 mt-10 xs:w-full xs:flex xs:justify-center sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center ${
          state.currentLanguage === "Arabic" && "text-right"
        }`}
      >
        <h1
          className={`montserrat text-xl font-bold ml-28 xs:ml-0 sm:ml-0 md:ml-0 xs:mr-0 sm:mr-0 md:mr-0 ${
            state.currentLanguage === "Arabic" && "text-2xl mr-28"
          }`}
        >
          {state.currentLanguage === "English"
            ? "USING NOW:"
            : ": حاليا أستخدم"}
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 xs:w-full sm:w-full md:w-full">
        {usingNow.map((skill) => (
          <div className="mx-12 mb-14 xs:mx-5" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div
        className={`w-8/12 mt-10 xs:w-full xs:flex xs:justify-center sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center ${
          state.currentLanguage === "Arabic" && "text-right"
        }`}
      >
        <h1
          className={`montserrat text-xl font-bold ml-28 xs:ml-0 sm:ml-0 md:ml-0 xs:mr-0 sm:mr-0 md:mr-0 ${
            state.currentLanguage === "Arabic" && "text-2xl mr-28"
          }`}
        >
          {state.currentLanguage === "English" ? "LEARNING:" : ": أتعلم"}
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 sm:w-full xs:w-full md:full">
        {learning.map((skill) => (
          <div className="mx-12 mb-14 xs:mx-5" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div
        className={`w-8/12 mt-10 xs:w-full xs:flex xs:justify-center sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center ${
          state.currentLanguage === "Arabic" && "text-right"
        }`}
      >
        <h1
          className={`montserrat text-xl font-bold ml-28 xs:ml-0 sm:ml-0 md:ml-0 xs:mr-0 sm:mr-0 md:mr-0 ${
            state.currentLanguage === "Arabic" && "text-2xl mr-28"
          }`}
        >
          {state.currentLanguage === "English"
            ? "OTHER SKILLS"
            : ": مهارات أخرى"}
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 sm:w-full md:w-full xs:w-full">
        {otherSkills.map((skill) => (
          <div className="mx-12 mb-14 xs:mx-5" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
