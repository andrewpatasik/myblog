import React from "react";
import useFetch from "../hooks/useFetch";
import { parseString } from "../helper/string";

const CommentList = ({ endpoint }) => {
  const [data] = useFetch(`${endpoint}/comments`);

  return (
    <ul>
      {data.length !== 0
        ? data.map((comment) => {
            return (
              <li
                key={comment._id}
                dangerouslySetInnerHTML={{
                  __html: parseString(JSON.parse(comment.commentContent)),
                }}
              />
            );
          })
        : "No Comment Found."}
    </ul>
  );
};

export default CommentList;
