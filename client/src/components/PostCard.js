import React from "react";
import PostContent from "./PostContent";
import Link from "./Link";
import setPostDateFormat from "../helper/date";

const PostCard = ({ post, setEndpoint }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <span className="text-gray-500">
          {setPostDateFormat(post.postDate)}
        </span>
        <span className="bg-gray-700 font-bold py-1 px-2 rounded-md text-white">
          How-To
        </span>
      </div>
      <PostContent
        title={post.postTitle}
        content={post.postContentPreview}
      />
      <div className="flex justify-between">
        <Link
          href={`/posts/${post._id}`}
          className={"flex items-center text-sky-500"}
          setEndpoint={setEndpoint}
        >
          <span>Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default PostCard;
