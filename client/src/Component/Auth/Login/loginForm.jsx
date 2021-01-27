import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./LoginHook";
import { Login } from "../../../Action/AuthAction";
import { clearError } from "../../../Action/ErrorAction";
import { connect } from "react-redux";
import {
  faGooglePlusSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LoginForm({ clearError, Login, error, isAuthenticated }) {
  const { state, handleChange, handleSubmit, Error } = useLogin(
    Login,
    error,
    clearError,
    isAuthenticated
  );
  return (
    <div className="div">
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
        <span className="error">{Error && Error}</span>
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

const mapStateToProps = (state) => {
  return {
    error: state.Error,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { Login, clearError })(LoginForm);
