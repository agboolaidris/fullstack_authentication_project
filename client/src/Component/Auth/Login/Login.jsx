import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./loginForm";
import Loading from "../../../Utlits/Loading";

function Login() {
  const isLoading = useSelector((state) => state.Auth.isLoading);
  return (
    <div className={isLoading ? "no-login" : "login"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="login-form">
            <LoginForm />
          </div>
          <div className="info">
            <div>
              <p>Share your intrest</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
