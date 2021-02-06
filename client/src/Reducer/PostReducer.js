import * as type from "../Action/type";
import { toast } from "react-toastify";
const Blog = (state = [], action) => {
  switch (action.type) {
    case type.FETCH:
      toast.success("welcome");
      return action.payload;
      break;

    case type.POST:
      toast.success("the post have been save");
      return [...state, action.payload];
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
