import * as api from "../Api/user";
import { FETCH_USER, POST_USER } from "./type";

export const Fetch = () => {
  console.log("user");
  return async (dispatch) => {
    try {
      const { data } = await api.FETCH();
      dispatch({ type: FETCH_USER, payload: data });
    } catch (err) {
      console.log(err.response);
    }
  };
};
