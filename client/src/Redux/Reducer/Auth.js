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

    case type.LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };

    case type.REGISTER_SUCCESSFUL:
    case type.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
      break;
    case type.LOGOUT:
      toast.success(action.payload?.msg, {
        position: "top-center",
      });

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
