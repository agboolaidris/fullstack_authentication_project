import axios from "axios";

const URL = `/api/blog`;

export const Post = (blog) => axios.post(URL, blog, { withCredentials: true });

export const Fetch = () => axios.get(URL, { withCredentials: true });

export const userFetch = () =>
  axios.get(`${URL}/user`, { withCredentials: true });

export const Patch = (id, blog) =>
  axios.patch(`${URL}/${id}`, blog, { withCredentials: true });

export const Delete = (id) =>
  axios.delete(`${URL}/${id}`, { withCredentials: true });

export const LikeBlog = (id) =>
  axios.patch(`${URL}/${id}/like`, {}, { withCredentials: true });

export const SaveBlog = (id) =>
  axios.patch(`${URL}/${id}/save`, {}, { withCredentials: true });

export const SaveBlogFetch = () =>
  axios.get(`${URL}/save`, {}, { withCredentials: true });
