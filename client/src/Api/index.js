import axios from "axios";

const URL = `http://localhost:5000/blog`;

export const Post = (user) => axios.post(URL, user, { withCredentials: true });

export const Fetch = () => axios.get(URL, { withCredentials: true });

export const userFetch = () =>
  axios.get(`${URL}/user`, { withCredentials: true });

export const patch = (id, blog) =>
  axios.patch(`${URL}/${id}`, blog, { withCredentials: true });

export const Delete = (id) =>
  axios.delete(`${URL}/${id}`, { withCredentials: true });
