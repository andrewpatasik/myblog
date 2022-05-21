import React, { useState } from "react";
import Filter from "./Filter";
import projectTemplate from "../data/projectTemplate";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  const renderedProject = () => {
    const { title, image, stack, description } = projectTemplate.find(
      (project) => project.id === activeFilter
    );

    return (
      <ProjectCard
        title={title}
        image={image}
        stack={stack}
        description={description}
      />
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 mb-10">
        <h3 className="text-4xl tracking-wide mb-2">PROJECTS</h3>
        <p className="text-lg text-gray-500">
          List of on-going web app projects I'm working on:
        </p>
      </div>
      <section className="flex flex-col w-full items-center">
        <Filter
          label={projectTemplate.map(project => project.title)}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {renderedProject()}
      </section>
    </div>
  );
};

export default Projects;
