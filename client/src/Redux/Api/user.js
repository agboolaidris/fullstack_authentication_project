import axios from "axios";
const URL = `/user`;
export const FETCH = () => axios.get(URL, { withCredentials: true });
export const PATCH = (data) =>
  axios.patch(URL, data, { withCredentials: true });
