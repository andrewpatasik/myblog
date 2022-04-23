import React, { useEffect, useState } from "react";
import myblog from "../api/myblog";
import Post from "./Post";

function ContentList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await myblog.get("/posts/published");

        setPosts(response.data);
      } catch (error) {
        throw error;
      }
    };

    fetchPost();
  }, []);
  return <div className="mt-24 flex flex-col justify-center items-center">
    { posts.map(post => {
      return <Post key={post._id} content={post} />
    })}
  </div>;
}

export default ContentList;
