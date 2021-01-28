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
        .then((res) => {
          axios
            .post("/user/login", user, { withCredentials: true })
            .then((res) => {
              console.log(res);
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
export const oauthRegister = (user) => {
  console.log(user);
  // const data = {
  //   username: user.name,
  //   email: user.email,
  //   password: user.id,
  //   password2: user.id,
  // };
  // return async (dispatch) => {
  //   try {
  //     dispatch({ type: USER_LOADING });
  //     axios
  //       .post("/user/register", data)
  //       .then((res) => {
  //         console.log(res);
  //         axios
  //           .post("/user/login", data)
  //           .then((res) => {
  //             dispatch({ type: REGISTER_SUCCESSFUL, payload: res.data });
  //           })
  //           .catch((err) => {
  //             dispatch(getError(err.response, "REGISTERATION FAIL"));
  //             dispatch({ type: REGISTER_ERROR });
  //           });
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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
  console.log(email);
  return async (dispatch) => {
    try {
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

export const ResetPassword = (user,params){
  return async dispatch=>{
    try{

    }
    catch(err){
      console.log(err.message)
    }
  }
}
