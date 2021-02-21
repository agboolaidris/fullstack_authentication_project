import * as api from "../Api/blog";
import * as type from "./type";

export const post = (blog, history) => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.Post(blog);
      dispatch({ type: type.POST, payload: data });
      history.push("/");
    } catch (err) {
      dispatch({ type: type.BLOG_ERROR, payload: err.message.msg });
    }
  };
};

export const fetch = () => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.Fetch();

      dispatch({ type: type.FETCH, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const patch = (id, blog, history) => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const data = await api.Patch(id, blog);
      history.push("/user/blogs");
      dispatch({ type: type.PATCH, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const userFetch = () => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.userFetch();
      dispatch({ type: type.USER_FETCH, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const Delete = (id) => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.Delete(id);
      dispatch({ type: type.DELETE, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const LikeBlog = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.LikeBlog(id);
      dispatch({ type: type.BLOG_LIKE, payload: data });
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const SaveBlog = (id) => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.SaveBlog(id);
      dispatch({ type: type.BLOG_SAVE, payload: data });
    } catch (error) {
      dispatch({ type: type.BLOG_ERROR, payload: error.response.data });
    }
  };
};

export const SaveblogFetch = () => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.SaveBlogFetch();
      dispatch({ type: type.BLOG_SAVE_FETCH, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };
};
