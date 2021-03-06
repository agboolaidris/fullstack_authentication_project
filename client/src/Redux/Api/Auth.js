import axios from "axios";

const URL = `/api/auth`;

export const Login = (data) =>
  axios.post(`${URL}/login`, data, { withCredentials: true });

export const Register = (data) => axios.post(`${URL}/register`, data);

export const Persitence = () => axios.get(URL, { withCredentials: true });

export const Forgetpassword = (data) =>
  axios.post(`${URL}/forgetpassword`, data);

export const Resetpassword = (param, data) =>
  axios.patch(`${URL}/resetpassword/${param}`, data);

export const Logout = () =>
  axios.get(`${URL}/logout`, { withCredentials: true });
