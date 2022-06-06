import axios from "axios";

const prodUrl = "https://andrewpatasik.herokuapp.com/api"
const devUrl = "http://localhost:5000/api"

const server = axios.create({
  baseURL: prodUrl 
});

export default server;
