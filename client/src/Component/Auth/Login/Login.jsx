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
        <div className="info">
          <div>
            <p>Share your intrest</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
