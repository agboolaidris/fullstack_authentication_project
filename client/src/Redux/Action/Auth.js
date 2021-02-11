import * as type from "./type";
import * as api from "../Api/Auth";
import { getMessage } from "./Message";

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Persitence();
      dispatch({ type: type.USER_LOADED, payload: data });
    } catch (err) {
      dispatch({ type: type.LOGOUT });
    }
  };
};

//register Action
export const Register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Register(user);
      if (data) {
        const { data } = await api.Login(user);
        dispatch({ type: type.LOGIN_SUCCESSFUL, payload: data });
      }
    } catch (err) {
      dispatch({ type: type.LOGOUT });
      dispatch(getMessage(err.response, "REGISTERATION FAIL"));
    }
  };
};

//login Action
export const Login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Login(user);
      dispatch({ type: type.LOGIN_SUCCESSFUL, payload: data });
    } catch (err) {
      dispatch({ type: type.LOGOUT });
      dispatch(getMessage(err.response, "LOGIN FAIL"));
    }
  };
};

// Logout
export const Logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Logout();
      dispatch({ type: type.LOGOUT, payload: data });
    } catch (err) {
      console.log(err.response);
    }
  };
};

// Forgetpassword Action
export const ForgetPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Forgetpassword(email);
      dispatch(getMessage(data, "FORGETPASSWORD SUCCESSFUL"));
      dispatch({ type: type.FORGETPASSWORD_SUCCESSFUL });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: type.LOGOUT });
      dispatch(getMessage(err.response, "FORGETPASSWORD ERROR"));
    }
  };
};

//Resetpassword Action
export const ResetPassword = (user, params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Resetpassword(params, user);
      dispatch({ type: type.RESETPASSWORD_SUCCESSFUL, payload: data });
      dispatch(getMessage(data, "RESETPASSWORD SUCCESSFUL"));
    } catch (err) {
      dispatch({ type: type.LOGOUT });
      dispatch(getMessage(err.response, "RESETPASSWORD FAIL"));
    }
  };
};
