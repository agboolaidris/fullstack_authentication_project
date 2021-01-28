import React from "react";
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import RegisterForm from "./registerForm";
import { connect } from "react-redux";
import { OauthRegister } from "../../../Action/AuthAction";

function Register({ isLoading, OauthRegister }) {
  return (
    <>
      <div className={isLoading ? "isloading" : "not-loading"}>
        <span></span>
      </div>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.Auth.isLoading,
  };
};

export default connect(mapStateToProps, { OauthRegister })(Register);
