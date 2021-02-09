import React from "react";
import useRegister from "./RegisterHook";
import { Link } from "react-router-dom";
import { Register } from "../../../Redux/Action/AuthAction";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Message from "../../../Utlits/Message";
function RegisterForm({ Register }) {
  const { state, handleChange, handleSubmit } = useRegister(Register);

  return (
    <form onSubmit={handleSubmit}>
      <Message err="REGISTERATION FAIL" />
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

export default connect(null, { Register })(RegisterForm);
