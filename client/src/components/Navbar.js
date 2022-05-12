import React from "react";
import PostFilter from "./PostFilter";
import Searchbar from "./Searchbar";

const Navbar = () => {

  return (
    <nav className="sticky top-16 z-20 w-full text-gray-600">
      <div className="absolute -top-12 left-0 w-full flex justify-between">
        <PostFilter />
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
