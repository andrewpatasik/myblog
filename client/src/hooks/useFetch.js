import { useState, useEffect } from "react";
import server from "../helper/server";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    server
      .get(endpoint)
      .then((res) => {
        switch (res.status) {
          case 200:
            setData(res.data);
            break;
          case 204:
            setData(res.statusText)
            break;
          default:
            throw res.statusText
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [endpoint]);

  return [data];
};

export default useFetch;
