import { combineReducers } from "redux";
import Auth from "./Auth";

import Blog from "./Blog";
import User from "./User";

const RootReducer = combineReducers({
  Auth,
  Blog,
  User,
});

export default RootReducer;
