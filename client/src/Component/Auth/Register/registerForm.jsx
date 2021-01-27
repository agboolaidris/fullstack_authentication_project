import React from "react";
import useRegister from "./RegisterHook";
import { Link } from "react-router-dom";
import { Register } from "../../../Action/AuthAction";
import { clearError } from "../../../Action/ErrorAction";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function RegisterForm({ Register, error, clearError, isAuthenticated }) {
  const { state, handleChange, handleSubmit, Error } = useRegister(
    Register,
    error,
    clearError,
    isAuthenticated
  );

  return (
    <form onSubmit={handleSubmit}>
      <span className="error">{Error && Error}</span>
      <div className="input">
        <label htmlFor="username">
          <FontAwesomeIcon icon={faUser} />
        </label>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={state.username}
          id="username"
        />
      </div>
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
      <div className="input">
        <label htmlFor="password2">
          <FontAwesomeIcon icon={faKey} />
        </label>
        <input
          required
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={state.password2}
          id="password2"
        />
      </div>
      <div className="check">
        <input type="checkbox" required />
        <span>i agree with the term and condition of this website </span>
      </div>
      <div className="btn-container">
        <Link to="/login">Login</Link>
        <button>Register</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.Error,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { Register, clearError })(RegisterForm);
