import React from "react";
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import LoginForm from "./loginForm";

function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <LoginForm />
      </div>
      <div className="social-login">
        <div>
        <p>Login with</p>
        <div className="social">
        <Facebook />
        <Google />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
