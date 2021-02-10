import * as type from "../Action/type";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case type.USER_LOADED:
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

    case type.USER_AUTH_ERR:
    case type.REGISTER_ERROR:
    case type.LOGIN_ERROR:
    case type.LOGOUT:
    case type.FORGETPASSWORD_ERR:
    case type.FORGETPASSWORD_SUCCESSFUL:
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
