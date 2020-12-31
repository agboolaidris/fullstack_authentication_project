import React from "react";
import { Link } from "react-router-dom";
import {
  faGooglePlusSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Right_page() {
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
      <form action="">
        <div className="input">
          <label htmlFor="">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <label htmlFor="">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input type="password" placeholder="Email" />
        </div>
        <div className="input">
          <label htmlFor="">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input type="password" placeholder=" Password" />
        </div>
        <div className="input">
          <label htmlFor="">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="check">
          <input type="checkbox" required />
          <span>i agree with the term and condition of this website </span>
        </div>
        <button>Register</button>
        <div className="login">
          <span>
            already have an account <Link to="/login">SIGN IN</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Right_page;
