import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import MessageReducer from "./MessageReducer";
import PostReducer from "./PostReducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Blog: PostReducer,
  Msg: MessageReducer,
});

export default RootReducer;
