import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Msg from "./MessageReducer";
import Blog from "./BlogReducer";

const RootReducer = combineReducers({
  Auth,
  Blog,
  Msg,
});

export default RootReducer;
