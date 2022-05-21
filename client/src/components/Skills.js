import React from "react";
import { skillTemplate } from "../data/skillTemplate";

function Skills() {
  return (
    <div className="my-12 flex flex-col items-center">
      <div className="text-center mb-10">
        <h3 className="text-4xl tracking-wide">SKILLS</h3>
      </div>
      <section className="w-1/3 h-96 flex flex-col w-full items-center">
        <ul className="flex flex-wrap gap-2 items-center justify-center">
          {skillTemplate.map((skill, index) => {
            return <li className="text-2xl tracking-wide font-bold text-white hover:text-gray-300 ease-in-out bg-zinc-800 py-1 px-2 shadow-md" key={index}>{skill}</li>
          })}
        </ul>
      </section>
    </div>
  );
}

export default Skills;
