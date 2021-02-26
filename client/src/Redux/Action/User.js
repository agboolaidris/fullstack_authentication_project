import * as api from "../Api/user";
import { FETCH_USER, PATCH_USER } from "./type";

export const Fetch = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.FETCH();
      dispatch({ type: FETCH_USER, payload: data });
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const patch = (user) => {
  return async (dispatch) => {
    console.log("sent");
    try {
      const { data } = await api.PATCH(user);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};
