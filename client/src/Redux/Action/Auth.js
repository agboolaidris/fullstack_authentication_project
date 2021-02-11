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
      dispatch({ type: type.USER_AUTH_ERR });
      console.log(err.response);
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
      console.log(err.response);
      dispatch({ type: type.LOGIN_ERROR });
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
      dispatch({ type: type.LOGIN_ERROR });
      dispatch(getMessage(err.response, "LOGIN FAIL"));
    }
  };
};

// //oauthLogin Action
// export const OauthLogin = (user, id) => {
//   let data = {};
//   if (id === "FACEBOOK") {
//     data = {
//       username: user.name,
//       email: user.email,
//       password: user.id,
//       password2: user.id,
//     };
//   } else if (id === "GOOGLE") {
//     console.log(user.mt);
//     data = {
//       username: user.profileObj.name,
//       email: user.profileObj.email,
//       password: user.profileObj.googleId,
//       password2: user.profileObj.googleId,
//     };
//   } else {
//     data = {};
//   }

//   return async (dispatch) => {
//     try {
//       dispatch({ type: USER_LOADING });
//       axios
//         .post("/user/login", data, { withCredentials: true })
//         .then((res) => {
//           dispatch({ type: LOGIN_SUCCESSFUL, payload: res });
//         })
//         .catch(
export const Logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.USER_LOADING });
      const { data } = await api.Logout();
      dispatch({ type: type.LOGOUT, payload: data });
    } catch (err) {
      console.log(err.message);
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
      dispatch({ type: type.FORGETPASSWORD_ERR });
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
      console.log(err.message);
      dispatch({ type: type.RESETPASSWORD_ERR });
      dispatch(getMessage(err.response, "RESETPASSWORD FAIL"));
    }
  };
};
