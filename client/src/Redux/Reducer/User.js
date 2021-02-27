import {
  FETCH_USER,
  PATCH_USER,
  USER_ERROR,
  USER_LOADING,
} from "../Action/type";
import { toast } from "react-toastify";
const Reducer = (state = { user: {}, isLoading: false }, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
      break;
    case PATCH_USER:
      toast.success("Profile updated");
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case USER_ERROR:
      toast.error(action.payload.msg);
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
      break;
  }
};

export default Reducer;
