import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  const server = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  useEffect(() => {
    server
      .get(endpoint)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status + ' ' + res.statusText);
          setData(res.data)
          return
        }
        return res.statusText;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [data]
};

export default useFetch;
