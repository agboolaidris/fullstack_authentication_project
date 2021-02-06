import * as type from "../Action/type";
import { toast } from "react-toastify";
const Blog = (state = [], action) => {
  switch (action.type) {
    case type.BLOG_CREATE:
      toast.success("the post have been save");
      console.log(action.payload);
      return [...state, action.payload];

      break;
    case type.BLOG_ERROR:

    default:
      return state;
      break;
  }
};
export default Blog;
