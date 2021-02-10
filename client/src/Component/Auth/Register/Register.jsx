import React from "react";
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import RegisterForm from "./registerForm";
import { connect } from "react-redux";
import { OauthRegister } from "../../../Redux/Action/Auth";
import Loading from "../../../Utlits/Loading";

function Register({ OauthRegister }) {
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
            <div className="social">
              <Facebook Oauth={OauthRegister} />
              <Google Oauth={OauthRegister} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(null, { OauthRegister })(Register);
