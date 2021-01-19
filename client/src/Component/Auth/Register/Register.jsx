import React from "react";
import Facebook from "./Facebook";
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
          <p>Login in with</p>
          <div>
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
