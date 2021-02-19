import React from "react";
import RegisterForm from "./registerForm";
import Loading from "../../../Utlits/Loading";
import { useSelector } from "react-redux";

function Register() {
  const isLoading = useSelector((state) => state.Auth.isLoading);
  return (
    <>
      <div className={isLoading ? "no-register" : "register"}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="register-form">
              <div className="div">
                <h1>Create Account</h1>
                <RegisterForm />
              </div>
            </div>
            <div className="info">
              <div>
                <p>Share your story</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Register;
