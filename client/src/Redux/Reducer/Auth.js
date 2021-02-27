import * as type from "../Action/type";
import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case type.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };

    case type.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
      break;
    case type.AUTH_ERROR:
      toast.warning(action.payload?.msg);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
      break;
  }
};

export default Auth;
