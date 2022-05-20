import React from "react";
import Filter from "./Filter";
import Searchbar from "./Searchbar";

const Navbar = ({ activeFilter, setActiveFilter }) => {
  return (
    <nav className="sticky top-[4.5rem] z-20 w-full text-gray-600">
      <div className="absolute -top-12 left-0 w-full flex justify-between">
        <Filter
          label={["Top", "Latest", "Oldest"]}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
