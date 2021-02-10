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

    case type.PATCH:
      toast.success("updated successful");
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
        userBlogs: state.userBlogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
      };
      break;

    case type.POST_ERROR:
      toast.error("An error occur");
      return state;
      break;

    case type.USER_FETCH:
      return {
        ...state,
        userBlogs: action.payload,
      };
      break;

    case type.DELETE:
      toast.success("blog deleted");
      return {
        ...state,
        userBlogs: state.userBlogs.filter(
          (blog) => blog._id !== action.payload._id
        ),
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
      };
      break;
    case type.BLOG_LIKE:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
      };
      break;
    default:
      return state;
      break;
  }
};
export default Blog;
