import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { parseString, sanitizeString } from '../helper/string';


const Comment = () => {
  const [comment, setComment] = useState("");

  const onButtonClick = () => {
    // TO DO: sanitized comment and post it to api: /posts/:postId/comments
  };

  return (
    <div className="relative mt-20">
      <ReactQuill theme="snow" value={comment} onChange={setComment} placeholder="Your comment goes here..." />
      <button
        className="absolute right-0 bg-sky-500 rounded-full py-1 px-2 font-bold text-white tracking-wide my-4"
        onClick={onButtonClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Comment;
