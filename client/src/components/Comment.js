import React, { useState } from "react";
import server from "../helper/server";
import ReactQuill from "react-quill";
import { sanitizeString } from "../helper/string";

const Comment = ({ endpoint }) => {
  const [comment, setComment] = useState("");

  const onButtonClick = () => {
    let commentPayload = sanitizeString(comment);

    server
      .post(`${endpoint}/comments`, { comment: commentPayload })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
          return res.statusText;
        }
        return res.status;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative my-20">
      <ReactQuill
        theme="snow"
        value={comment}
        onChange={setComment}
        placeholder="Your comment goes here..."
      />
      <button
        className="absolute right-0 bg-sky-500 rounded-full py-1 px-3 font-bold text-white tracking-wide my-4"
        onClick={onButtonClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Comment;
