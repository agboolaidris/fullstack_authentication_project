import axios from "axios";

const URL = `http://localhost:5000/blog`;

export const Post = (user) => axios.post(URL, user, { withCredentials: true });
export const Fetch = () => axios.get(URL, { withCredentials: true });
