import React from "react";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-10 flex justify-between items-center p-4 bg-white text-gray-500 border-b-2 drop-shadow-sm">
      <h1
        className="text-xl tracking-wide leading-5 px-2"
        style={{ fontFamily: "Contrail One, sans-serif" }}
      >
        <span className="text-sky-400">andrew<br/>patasik</span>
      </h1>
      <a href="/">About Me</a>
    </div>
  );
};

export default Header;
