import React from "react";
import Facebooks from "../Oauth/Facebook";
import Facebook from "./Facebook";
import Google from "./Google";
import RegisterForm from "./registerForm";

function Register() {
  return (
    <div className="register">
      <div className="register-form">
        <div className="div">
          <h1>Create Account</h1>
          <RegisterForm />
        </div>
      </div>
      <div className="social-register">
        <div>
          <p>Register with</p>
          <div className="social">
            <Facebook />
            <Google />
            <Facebooks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
