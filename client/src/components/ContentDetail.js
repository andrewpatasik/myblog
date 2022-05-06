import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import moment from "moment";
import Post from "./Post";
import Comment from "./Comment";
import CommentList from "./CommentList";

const ContentDetail = () => {
  const [data] = useFetch(window.location.pathname);
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(data);
  }, [data]);

  const renderedPost = () => {
    return Object.keys(post).length !== 0 ? (
      <div>
        <div className="flex text-gray-500 justify-between items-center mb-4">
          <div className="flex gap-3">
          <span className="flex items-center gap-2 text-sm">
            <i className="fa-solid fa-clock text-xl"></i>
            {moment().diff(moment(post.postDate), "hours") >= 24
              ? moment(post.postDate).format("MMM Do YY")
              : moment(post.postDate).fromNow()}
          </span>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-300 w-12 h-12"></div>
            <span className="tracking-wide">andrew</span>
          </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Share It On:</span>
            <ul className="flex justify-around text-xl">
              <li><i className="fa-brands fa-twitter"></i></li>
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-reddit-alien"></i></li>
            </ul>
          </div>
        </div>
        <Post title={post.postTitle} content={post.postContent} />
        <hr />
      </div>
    ) : (
      <div>
        <h1>Cannot show post</h1>
      </div>
    );
  };
  
  return (
    <div className="relative flex flex-col w-1/2 p-20 bg-white min-h-screen mt-24 rounded-md">
      {renderedPost()}
      <Comment endpoint={window.location.pathname} />
      <CommentList endpoint={window.location.pathname} />
    </div>
  );
};

export default ContentDetail;
