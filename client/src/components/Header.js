import React from "react";
import Link from './Link';

const Header = ({ setEndpoint }) => {
  return (
    <div className="w-full sticky top-0 z-10 flex justify-between items-center px-4 text-gray-500 backdrop-blur-sm">
      <Link href="/" setEndpoint={setEndpoint}>
        <img
          src="/static/images/logo-small.svg"
          alt=""
          className="w-14 my-4 pt-1 rounded-md border-2 border-black bg-white"
        />
      </Link>
      <Link href="/about" setEndpoint={setEndpoint}>About Me</Link>
    </div>
  );
};

export default Header;
