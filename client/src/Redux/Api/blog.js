import axios from "axios";

const URL = `https://irisblogserver.herokuapp.com/blog`;
//const URL = `http://localhost:5000/blog`;
export const Post = (blog) => axios.post(URL, blog, { withCredentials: true });

export const Fetch = () => axios.get(URL, { withCredentials: true });

export const userFetch = () =>
  axios.get(`${URL}/user`, { withCredentials: true });

export const Patch = (id, blog) =>
  axios.patch(`${URL}/${id}`, blog, { withCredentials: true });

export const Delete = (id) =>
  axios.delete(`${URL}/${id}`, { withCredentials: true });

export const LikeCount = (id) =>
  axios.patch(`${URL}/${id}/user`, {}, { withCredentials: true });
