import axios from "axios";

export default axios.create({
  baseURL: " https://randomuser.me",
  timeout: 1000,
  headers: { "Content-Type": "application.json" },
});
