import * as type from "../Action/type";
import { toast } from "react-toastify";

const initialState = {
  userBlogs: [],
  blogs: [],
};
const Blog = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH:
      return {
        ...state,
        blogs: action.payload,
      };
      break;

    case type.POST:
      toast.success("the post have been save");
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
      break;

    case type.POST_ERROR:
      toast.error("An error occur");
      return state;
      break;

    default:
      return state;
      break;
  }
};
export default Blog;
