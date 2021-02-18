import React from "react";
import RegisterForm from "./registerForm";
import Loading from "../../../Utlits/Loading";

function Register() {
  return (
    <>
      <Loading />
      <div className="register">
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
      </div>
    </>
  );
}

export default Register;
