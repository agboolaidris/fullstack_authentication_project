import React from "react";
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import LoginForm from "./loginForm";
import { connect } from "react-redux";
import { OauthLogin } from "../../../Action/AuthAction";
function Login({ OauthLogin }) {
  return (
    <div className="login">
      <div className="login-form">
        <LoginForm />
      </div>
      <div className="login-social">
        <div>
          <p>Login with</p>
          <div className="social">
            <Facebook Oauth={OauthLogin} />
            <Google Oauth={OauthLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { OauthLogin })(Login);
