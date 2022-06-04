import { useState, useEffect } from "react";
import server from "../helper/server";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    server
      .get(endpoint)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status + " " + res.statusText);
          setData(res.data);
        }
        if (res.status === 204) {
          console.log(res.statusText)
          setData(res.statusText)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [endpoint]);

  return [data];
};

export default useFetch;
