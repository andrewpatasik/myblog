import React from "react";
import useFetch from "../hooks/useFetch";
import { parseString } from "../helper/string";
import moment from "moment";

const CommentList = ({ endpoint }) => {
  const [data] = useFetch(`${endpoint}/comments`);

  return (
    <ul className="flex flex-col gap-4 my-4">
      {data.length !== 0
        ? data.map((comment) => {
            return (
              <li key={comment._id} className="bg-slate-100 p-4 rounded-md">
                <span className="text-gray-500 text-sm">
                  {moment().diff(moment(comment.commentDate), "hours") >= 24
                    ? moment(comment.commentDate).format("MMM Do YY")
                    : moment(comment.commentDate).fromNow()}
                </span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: parseString(JSON.parse(comment.commentContent)),
                  }}
                />
              </li>
            );
          })
        : "No Comment Found."}
    </ul>
  );
};

export default CommentList;
