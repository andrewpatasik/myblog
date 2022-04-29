import React from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import Post from "./Post";

const ContentList = () => {
  const [data] = useFetch("/posts");

  return (
    <div className="relative flex flex-col w-1/2 bg-white min-h-screen mt-24 rounded-md">
      <Navbar />
      {data.length !== 0 ? (
        data.map(post => {
          return (
            <div>
              <Post postData={post} />
              <hr />
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
