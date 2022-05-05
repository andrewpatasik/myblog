import React from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import PostCard from "./PostCard";

const ContentList = ({ setEndpoint }) => {
  const [data] = useFetch("/posts");

  return (
    <div className="relative flex flex-col w-1/2 bg-white min-h-screen mt-24 rounded-md">
      <Navbar />
      {data.length !== 0 ? (
        data.map((post, index) => {
          return (
            <div key={post._id}>
              <PostCard postData={post} setEndpoint={setEndpoint} />
              {(data.length - 1) === index ? '' : <hr />} 
            </div>
          )
        })
      ) : (
        <div className="my-auto text-gray-400 flex flex-col items-center">
          <h1 className="text-2xl font-bold tracking-thight">No Post Found.</h1>
        </div>
      )}
    </div>
  );
};

export default ContentList;
