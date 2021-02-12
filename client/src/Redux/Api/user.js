import axios from "axios";
const URL = `https://irisblogserver.herokuapp.com/user`;
//const URL = `http://localhost:5000/user`;
export const FETCH = () => axios.get(URL, { withCredentials: true });
export const PATCH = (data) =>
  axios.patch(URL, data, { withCredentials: true });
