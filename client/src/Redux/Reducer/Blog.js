import * as type from "../Action/type";
import { toast } from "react-toastify";

const initialState = {
  blogs: [],
  blog: {},
  isLoading: false,
};
const Blog = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case type.FETCH:
      return {
        ...state,
        blogs: action.payload.reverse(),
        isLoading: false,
      };
      break;

    case type.POST:
      toast.success("the post have been save");
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        isLoading: false,
      };
      break;

    case type.PATCH:
      toast.success("updated successful");
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
        isLoading: false,
      };
      break;

    case type.DELETE:
      toast.success("blog deleted");
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
        isLoading: false,
      };
      break;

    case type.BLOG_LIKE:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
        isLoading: false,
      };
      break;

    case type.BLOG_SAVE:
      toast.success("blog have been save");
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
        isLoading: false,
      };
      break;

    case type.EACH_BLOG:
      return {
        ...state,
        blog: action.payload,
        isLoading: false,
      };
      break;

    case type.BLOG_ERROR:
      toast.error(action.payload?.msg);
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
      break;
  }
};
export default Blog;
