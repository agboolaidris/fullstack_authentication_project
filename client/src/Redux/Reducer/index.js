import { combineReducers } from "redux";
import Auth from "./Auth";
import Msg from "./Message";
import Blog from "./Blog";
import User from "./User";

const RootReducer = combineReducers({
  Auth,
  Blog,
  Msg,
  User,
});

export default RootReducer;
