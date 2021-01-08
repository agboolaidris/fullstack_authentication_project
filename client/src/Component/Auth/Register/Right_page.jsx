import React from "react";
import useRegister from "./RegisterHook";
import { Link } from "react-router-dom";
import { Register } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import {
  faGooglePlusSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Right_page({ Register }) {
  const { state, handleChange, handleSubmit } = useRegister(Register);

  return (
    <div className="div">
      <h1>Create Account</h1>
      <div className="icon">
        <a>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faGooglePlusSquare} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </div>
      <p> or use your email for registration</p>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
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
        <button>Register</button>
        <div className="login-link">
          <span>
            already have an account <Link to="/login">SIGN IN</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { Register })(Right_page);
