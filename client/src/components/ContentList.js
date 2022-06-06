import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import PostCard from "./PostCard";

const ContentList = () => {
  const [data] = useFetch("/posts/published");
  const [activeFilter, setActiveFilter] = useState(0);

  const renderContent = () => {
    if (data == "No Content") {
      return (
        <div className="my-auto text-gray-400 flex flex-col items-center">
          <h1 className="text-2xl font-bold tracking-thight">
            Looks Like It's Empty...
          </h1>
        </div>
      );
    }

    if (data instanceof Array && data.length >= 1) {
      return data.map((post, index) => {
        return (
          <div key={post._id}>
            <PostCard post={post} />
            {data.length - 1 === index ? "" : <hr />}
          </div>
        );
      });
    }

    // Initial Loading
    return (
      <div className="my-auto text-gray-400 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-thight">
          Collecting Posts, Please Wait...
        </h1>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col w-1/2 bg-white min-h-screen mt-24 rounded-md">
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      {renderContent()}
    </div>
  );
};

export default ContentList;
