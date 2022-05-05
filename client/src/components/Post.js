import React, { useEffect } from "react";
import useEditor from "../hooks/useEditor";

const OPTIONS = {
  readOnly: true,
  theme: "bubble",
  modules: {
    toolbar: false,
  },
};

const Post = ({ title, content }) => {
  const [quill] = useEditor("#content-box", OPTIONS);

  useEffect(() => {
    if (quill) {
      quill.setContents(JSON.parse(content));
    }
  }, [quill, content]);

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
      <div
        id="content-box"
        style={{ fontFamily: "Merriweather", fontWeight: 400 }}
      ></div>
    </div>
  );
};

export default Post;
