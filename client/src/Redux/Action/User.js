import * as api from "../Api/user";
import { FETCH_USER, PATCH_USER, USER_ERROR, USER_LOADING } from "./type";

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

export const patch = (user, history) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
      const { data } = await api.PATCH(user);
      dispatch({ type: PATCH_USER, payload: data });
      history.push("/");
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error.response.data });
    }
  };
};
