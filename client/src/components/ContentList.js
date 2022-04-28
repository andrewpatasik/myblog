import React, { useState } from "react";
import Navbar from "./Navbar";

const ContentList = () => {
  const [content, setContent] = useState([]);
  return (
    <div className="relative flex flex-col w-1/2 bg-white min-h-screen mt-24">
      <Navbar />
      {!content.length !== 0 ? (
        <div className="my-auto text-gray-400 text-center hover:text-white">
          <i className="fa-solid fa-ghost text-8xl"></i>
          <h1 className="text-3xl font-bold tracking-thight mt-2">
            No Post Found.
          </h1>
        </div>
      ) : (
        <h1>Post</h1>
      )}
    </div>
  );
};

export default ContentList;
