import React from "react";
import LoginForm from "./loginForm";
import Loading from "../../../Utlits/Loading";

function Login() {
  return (
    <>
      <Loading />
      <div className="login">
        <div className="login-form">
          <LoginForm />
        </div>
        <div className="login-social">
          <div>
            <p>Login with</p>
            <div className="social"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
