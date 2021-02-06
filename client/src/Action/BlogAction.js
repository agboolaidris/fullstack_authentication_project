import * as api from "../Api/index";
import * as type from "./type";
export const post = (blog) => {
  return async (dispatch) => {
    try {
      const { data } = await api.Post(blog);
      dispatch({ type: type.POST, payload: data });
    } catch (err) {
      dispatch({ type: type.POST_ERROR, payload: err.message.msg });
    }
  };
};

export const fetch = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.Fetch();
      dispatch({ type: type.FETCH, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const userFetch = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.userFetch();
      dispatch({ type: type.USER_FETCH, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};
