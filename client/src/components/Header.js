import React from "react";

const Header = () => {

  return (
    <div className="w-full sticky top-0 z-10 flex justify-between items-center p-4 bg-white text-gray-500 border-b-2 drop-shadow-sm">
      <h1 className="text-2xl tracking-tight" style={{fontFamily: 'Contrail One, sans-serif'}}><span className="font-bold text-sky-500">andrew</span> patasik</h1>
      <a href="#">
        About Me
      </a>
    </div>
  );
};

export default Header;
