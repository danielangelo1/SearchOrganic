import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const login = axios.create({
  baseURL: "https://search-organic.up.railway.app/",
});
