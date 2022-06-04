import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import PostCard from "./PostCard";

const ContentList = () => {
  const [data] = useFetch("/posts");
  const [activeFilter, setActiveFilter] = useState(0);

  const renderPostCard = () => {
    return data.length !== 0 ? (
      data.map((post, index) => {
        return (
          <div key={post._id}>
            <PostCard post={post} />
            {data.length - 1 === index ? "" : <hr />}
          </div>
        );
      })
    ) : (
      <div className="my-auto text-gray-400 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-thight">No Post Found.</h1>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col w-1/2 bg-white min-h-screen mt-24 rounded-md">
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      {renderPostCard()}
    </div>
  );
};

export default ContentList;
