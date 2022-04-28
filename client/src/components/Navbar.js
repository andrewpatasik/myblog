import React, { useState } from "react";

const Navbar = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const [term, setTerm] = useState("");

  return (
    <nav className="sticky top-14 z-20 w-full text-gray-600">
      <div className="absolute -top-12 left-0 w-full flex justify-between">
        <ul className="flex items-center gap-2">
          <li>
            <a
              href="#"
              className={
                activeFilter === 0
                  ? "underline underline-offset-8 decoration-2 text-sky-500"
                  : "hover:text-white"
              }
              onClick={() => setActiveFilter(0)}
            >
              <span>Top</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={
                activeFilter === 1
                  ? "underline underline-offset-8 decoration-2 text-sky-500"
                  : "hover:text-white"
              }
              onClick={() => setActiveFilter(1)}
            >
              <span>Latest</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={
                activeFilter === 2
                  ? "underline underline-offset-8 decoration-2 text-sky-500"
                  : "hover:text-white"
              }
              onClick={() => setActiveFilter(2)}
            >
              <span>Oldest</span>
            </a>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <div className="relative text-gray-600">
            <input
              className="w-36 h-10 px-4 border-b-2 border-sky-600 bg-transparent focus:outline-none"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              name="searchbar"
              placeholder="search post"
            />
            <button className="absolute top-2 right-2 text-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
