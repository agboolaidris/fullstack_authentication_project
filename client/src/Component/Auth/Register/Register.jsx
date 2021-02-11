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
        <div className="register-social">
          <div>
            <p>Register with</p>
            <div className="social">LET SHARE OUR STORY</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
