import axios from "axios";
const URL =
  process.env.NODE_ENV === "development"
    ? "http:localhost:5000/user"
    : `https://irisblogserver.herokuapp.com/user`;

export const FETCH = () => axios.get(URL, { withCredentials: true });
export const PATCH = (data) =>
  axios.patch(URL, data, { withCredentials: true });
