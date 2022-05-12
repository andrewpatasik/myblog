import React from "react";
import useFetch from "../hooks/useFetch";
import { parseString } from "../helper/string";
import setPostDateFormat from "../helper/date";

const CommentList = ({ endpoint }) => {
  const [data] = useFetch(`${endpoint}/comments`);

  return (
    <div>
      <h3 className="text-xl font-bold">Comments ({data.length}) :</h3>
      <ul className="flex flex-col gap-4 my-4">
        {data.length !== 0
          ? data.map((comment) => {
              return (
                <li key={comment._id} className="bg-slate-100 p-4 rounded-md">
                  <span className="text-gray-500 text-sm">
                    {setPostDateFormat(comment.commentDate)}
                  </span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: parseString(JSON.parse(comment.commentContent)),
                    }}
                  />
                </li>
              );
            })
          : <p className="text-xl text-gray-500 text-center">No Comment Found.</p>}
      </ul>
    </div>
  );
};

export default CommentList;
