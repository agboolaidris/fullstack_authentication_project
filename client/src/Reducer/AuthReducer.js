import {
  USER_LOADING,
  USER_LOADED,
  USER_AUTH_ERR,
  REGISTER_ERROR,
  REGISTER_SUCCESSFUL,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  FORGETPASSWORD_ERR,
  FORGETPASSWORD_SUCCESSFUL,
} from "../Action/type";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case REGISTER_SUCCESSFUL:
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case USER_AUTH_ERR:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT:
    case FORGETPASSWORD_ERR:
    case FORGETPASSWORD_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
      break;
  }
};

export default AuthReducer;
