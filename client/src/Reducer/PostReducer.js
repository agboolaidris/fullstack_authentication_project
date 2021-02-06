import * as type from "../Action/type";
const Blog = (state = [], action) => {
  switch (action.type) {
    case type.BLOG_CREATE:
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
};
export default Blog;
