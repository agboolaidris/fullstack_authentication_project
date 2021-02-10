import axios from "axios";
const URL = "http://localhost:5000/user";

export const FETCH = () => axios.get(URL, { withCredentials: true });
export const PATCH = (data) =>
  axios.patch(URL, data, { withCredentials: true });
