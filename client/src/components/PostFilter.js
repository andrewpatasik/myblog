import React, { useState } from "react";

const PostFilter = () => {
  const [activeFilter, setActiveFilter] = useState(1);

  return (
    <ul className="flex items-center gap-2">
      <li>
        <a
          href="/"
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
          href="/"
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
          href="/"
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
  );
};

export default PostFilter;
