import * as api from "../Api/index";
import * as type from "./type";
export const postBlog = (blog) => {
  return async (dispatch) => {
    try {
      const { data } = await api.Post(blog);
      dispatch({ type: type.BLOG_CREATE, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};
