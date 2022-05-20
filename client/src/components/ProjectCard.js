import React from "react";

const ProjectCard = ({ title, image, stack, description }) => {
  return (
    <div className="flex m-8 w-1/2 h-96 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex-none w-2/5 relative">
        <img
          src={image}
          alt="image_placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl tracking-wide font-bold">{title}</h1>
          <ul className="flex gap-3 items-center">
            {stack.map((icon, index) => (
              <li key={index} className="w-8">
                <img
                  src={`/static/icons/${icon}.svg`}
                  alt={icon}
                  className="w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="h-64 overflow-auto my-4 pr-6">
          <p>{description}</p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 text-indigo-500 text-lg">
          <a href="#" className="flex items-center p-1 gap-1">
            <i class="fa-solid fa-eye"></i>
            <span className="font-bold tracking-wide">Demo</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-1">
            <i class="fa-solid fa-code"></i>
            <span className="font-bold tracking-wide">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
