import React from "react";
import { Link } from "react-router-dom";
import {
  faGooglePlusSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Left_Page() {
  return (
    <div className="div">
      <h1>SIGN IN</h1>
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
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <label htmlFor="">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input type="password" placeholder=" Password" />
        </div>

        <button>LOG IN</button>
        <div className="register-link">
          <span>
            don't have an account <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Left_Page;
