import axios from "axios";

const server = axios.create({
  baseURL: "https://andrewpatasik.herokuapp.com/api",
});

export default server;
