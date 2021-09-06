import React from "react";

export default function Skill({ skillData }) {
  return (
    <div className="flex flex-col items-center w-32">
      <img src={skillData.image} alt="" className="w-28 h-28" />
      <h1 className="text-lg montserrat font-medium mt-5">{skillData.name}</h1>
    </div>
  );
}
