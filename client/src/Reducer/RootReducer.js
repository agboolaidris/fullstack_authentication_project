import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import MessageReducer from "./MessageReducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Msg: MessageReducer,
});

export default RootReducer;
