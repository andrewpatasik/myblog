/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Filter = ({ label, activeFilter, setActiveFilter }) => {

  const renderedFilter = () => {
    return label.map((label, index) => {
      return (
        <li key={index}>
          <button
            className={
              activeFilter === index 
                ? "underline underline-offset-8 decoration-2 text-sky-500"
                : "hover:text-white"
            }
            onClick={() => setActiveFilter(index)}
          >
            <span className="px-1">{label}</span>
          </button>
        </li>
      );
    });
  };

  return <ul className="flex items-center gap-2">
    {renderedFilter()}
  </ul>;
};

export default Filter;
