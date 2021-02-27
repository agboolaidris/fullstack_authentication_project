import * as type from "./type";
import * as api from "../Api/Auth";

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.LOADING });
      const { data } = await api.Persitence();
      dispatch({ type: type.SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR });
    }
  };
};

//register Action
export const Register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.LOADING });
      const { data } = await api.Register(user);
      if (data) {
        const { data } = await api.Login(user);
        dispatch({ type: type.SUCCESS, payload: data });
      }
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR, payload: err.response.data });
    }
  };
};

//login Action
export const Login = (user) => {
  return async (dispatch) => {
    dispatch({ type: type.LOADING });
    try {
      const { data } = await api.Login(user);
      dispatch({ type: type.SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR, payload: err.response.data });
    }
  };
};

// Logout
export const Logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.LOADING });
      const { data } = await api.Logout();
      dispatch({ type: type.LOGOUT });
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR, payload: err.response.data });
    }
  };
};

// Forgetpassword Action
export const ForgetPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.LOADING });
      const { data } = await api.Forgetpassword(email);
      dispatch({ type: type.LOGOUT, payload: data });
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR, payload: err.response.data });
    }
  };
};

//Resetpassword Action
export const ResetPassword = (user, params, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.LOADING });
      const { data } = await api.Resetpassword(params, user);
      history.push("/login");
      dispatch({ type: type.LOGOUT, payload: data });
    } catch (err) {
      dispatch({ type: type.AUTH_ERROR, payload: err.response.data });
    }
  };
};
