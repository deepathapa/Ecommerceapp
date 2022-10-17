import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4500/api/user"
})

export default API;