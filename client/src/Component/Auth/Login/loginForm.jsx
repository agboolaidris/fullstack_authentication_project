import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./LoginHook";
import { Login } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import Message from "../../../Utlits/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LoginForm({ Login }) {
  const { state, handleChange, handleSubmit } = useLogin(Login);

  return (
    <div className="div">
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
        <Message err="LOGIN FAIL" />
        <div className="input">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            required
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={state.email}
            id="email"
          />
        </div>
        <div className="input">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input
            required
            type="password"
            placeholder=" Password"
            onChange={handleChange}
            value={state.password}
            id="password"
          />
        </div>

        <div className="btn-container">
          <Link to="/register">Register</Link>
          <button>LOG IN</button>
        </div>
        <div className="forgetpassword">
          <p>
            forget password ?<Link to="/forgetpassword">CLICK</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { Login })(LoginForm);
