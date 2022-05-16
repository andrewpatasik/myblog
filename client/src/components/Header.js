import React from "react";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-10 flex justify-between items-center px-4 text-gray-500 backdrop-blur-sm">
      <a href="/">
        <img
          src="/static/images/logo-small.svg"
          alt=""
          className="w-14 my-4 pt-1 rounded-md border-2 border-black bg-white"
        />
      </a>
      <a href="/about">About Me</a>
    </div>
  );
};

export default Header;
