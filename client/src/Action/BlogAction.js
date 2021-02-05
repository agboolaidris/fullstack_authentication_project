import * as api from "../Api/index";
export const postBlog = (blog) => {
  return async (dispatch) => {
    try {
      const { data } = await api.Post(blog);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
