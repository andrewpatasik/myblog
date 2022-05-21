import React from "react";
import { skillTemplate } from "../data/skillTemplate";

function Skills() {
  return (
    <section className="flex mb-20 justify-center">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-11/12">
          <h3 className="text-4xl tracking-wide mb-2">SKILLS</h3>
          <p className="text-lg text-gray-500">
            I have background as Software Engineer, I've studied Computer
            Science at Universitas Esa Unggul Jakarta, where I earned my
            Bachelor of Computer Science at 2020. I love technology in general
            but I have a notable interest in Web-based Programming. Thus, my
            skillset majorly focused on developing and building web-based
            application. I'm familiar working with these technology:
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 justify-start pl-8">
          {skillTemplate.map((skill, index) => {
            return (
              <li
                className="text-lg tracking-wide font-bold text-white hover:text-gray-300 ease-in-out bg-zinc-800 py-1 px-2 rounded-lg shadow-md"
                key={index}
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
