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
      <div className="w-8/12 mt-10">
        <h1 className="montserrat text-xl font-bold ml-28">USING NOW:</h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10">
        {usingNow.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div className="w-8/12 mt-14">
        <h1 className="montserrat text-xl font-bold ml-28">LEARNING:</h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10">
        {learning.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <div className="w-8/12 mt-14">
        <h1 className="montserrat text-xl font-bold ml-28">OTHER SKILLS:</h1>
      </div>
      <div className="flex flex-wrap w-8/12 justify-center mt-10">
        {otherSkills.map((skill) => (
          <div className="mx-12 mb-14" key={skill.name}>
            <Skill skillData={skill} />
          </div>
        ))}
      </div>
      <img src={separator} alt="separator" className="mt-10" />
    </div>
  );
}
