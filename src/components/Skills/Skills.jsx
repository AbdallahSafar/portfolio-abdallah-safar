import React from "react";
import Skill from "./Skill";
import separator from "../../images/separator.svg";
import { learning, otherSkills, usingNow } from "../../MySkills";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center w-full">
      <div className="border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold text-2xl mt-20">
        SKILLS
      </div>
      <div className="w-8/12 mt-10 sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center">
        <h1 className="montserrat text-xl font-bold ml-28 sm:ml-0 md:ml-0">
          USING NOW:
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 sm:w-full">
        {usingNow.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div className="w-8/12 mt-14 sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center">
        <h1 className="montserrat text-xl font-bold ml-28 sm:ml-0 md:ml-0">
          LEARNING:
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 sm:w-full">
        {learning.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div className="w-8/12 mt-14 sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center">
        <h1 className="montserrat text-xl font-bold ml-28 sm:ml-0 md:ml-0">
          OTHER SKILLS:
        </h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10 sm:w-full">
        {otherSkills.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
