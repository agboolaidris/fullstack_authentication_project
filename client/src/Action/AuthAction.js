import {
  USER_LOADED,
  LOGOUT,
  USER_LOADING,
  USER_AUTH_ERR,
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
  FORGETPASSWORD_SUCCESSFUL,
  FORGETPASSWORD_ERR,
  RESETPASSWORD_SUCCESSFUL,
  RESETPASSWORD_ERR,
} from "./type";
import axios from "axios";
import { getMessage } from "./MessageAction";

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .get("/user/authenticated", {
          withCredentials: true,
        })
        .then((res) => {
          dispatch({ type: USER_LOADED, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: USER_AUTH_ERR });
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};

//register Action
export const Register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .post("/user/register", user)
        .then(() => {
          dispatch({ type: USER_LOADING });
          axios
            .post("/user/login", user, { withCredentials: true })
            .then((res) => {
              dispatch({ type: REGISTER_SUCCESSFUL, payload: res.data });
            })
            .catch((err) => {
              dispatch(getMessage(err.response, "REGISTERATION FAIL"));
              dispatch({ type: REGISTER_ERROR });
            });
        })
        .catch((err) => {
          dispatch({ type: REGISTER_ERROR });
          dispatch(getMessage(err.response, "REGISTERATION FAIL"));
        });
    } catch (err) {
      dispatch(getMessage(err.message, "REGISTERATION FAIL"));
    }
  };
};

//login Action
export const Login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .post("/user/login", user, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: LOGIN_ERROR });
          dispatch(getMessage(err.response, "LOGIN FAIL"));
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};

//oauthRegister Action
export const OauthRegister = (user, id) => {
  let data = {};
  if (id === "FACEBOOK") {
    data = {
      username: user.name,
      email: user.email,
      password: user.id,
      password2: user.id,
    };
  } else if (id === "GOOGLE") {
    data = {
      username: user.Mt.Ed,
      email: user.Mt.tu,
      password: user.Mt.OU,
      password2: user.Mt.OU,
    };
  } else {
    data = {};
  }

  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .post("/user/register", data)
        .then((res) => {
          dispatch({ type: USER_LOADING });
          axios
            .post("/user/login", data, { withCredentials: true })
            .then((res) => {
              dispatch({ type: REGISTER_SUCCESSFUL, payload: res.data });
            })
            .catch((err) => {
              dispatch(getMessage(err.response, "REGISTERATION FAIL"));
              dispatch({ type: REGISTER_ERROR });
            });
        })
        .catch((err) => {
          dispatch({ type: REGISTER_ERROR });
          dispatch(getMessage(err.response, "REGISTERATION FAIL"));
        });
    } catch (err) {
      console.log(err);
    }
  };
};

//oauthLogin Action
export const OauthLogin = (user, id) => {
  let data = {};
  if (id === "FACEBOOK") {
    data = {
      username: user.name,
      email: user.email,
      password: user.id,
      password2: user.id,
    };
  } else if (id === "GOOGLE") {
    data = {
      username: user.Mt.Ed,
      email: user.Mt.tu,
      password: user.Mt.OU,
      password2: user.Mt.OU,
    };
  } else {
    data = {};
  }

  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .post("/user/login", data, { withCredentials: true })
        .then((res) => {
          dispatch({ type: LOGIN_SUCCESSFUL, payload: res });
        })
        .catch((err) => {
          dispatch({ type: LOGIN_ERROR });
          dispatch(getMessage(err.response, "LOGIN FAIL"));
        });
    } catch (err) {
      console.log(err);
    }
  };
};

//logout Action
export const Logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });

      axios
        .get("/user/logout", { withCredentials: true })
        .then((res) => {
          dispatch({ type: LOGOUT });
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};

// Forgetpassword Action

export const ForgetPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .post("user/forgetpassword", email)
        .then((res) => {
          dispatch(getMessage(res, "FORGETPASSWORD SUCCESSFUL"));
          dispatch({ type: FORGETPASSWORD_SUCCESSFUL });
        })
        .catch((err) => {
          dispatch({ type: FORGETPASSWORD_ERR });
          dispatch(getMessage(err.response, "FORGETPASSWORD ERROR"));
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};

//Resetpassword Action

export const ResetPassword = (user, params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOADING });
      axios
        .put(`/user/resetpassword/${params}`, user)
        .then((res) => {
          dispatch({ type: RESETPASSWORD_SUCCESSFUL });
          dispatch(getMessage(res, "RESETPASSWORD SUCCESSFUL"));
        })
        .catch((err) => {
          dispatch({ type: RESETPASSWORD_ERR });
          dispatch(getMessage(err.response, "RESETPASSWORD FAIL"));
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};
