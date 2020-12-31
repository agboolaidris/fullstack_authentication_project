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
        <div>
          <label htmlFor="">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input type="text" placeholder="enter your username" />
        </div>
        <div>
          <label htmlFor="">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input type="password" placeholder="enter password" />
        </div>
        <div>
          <label htmlFor="">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input type="password" placeholder="enter password" />
        </div>
        <div>
          <label htmlFor="">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input type="password" placeholder="enter password" />
        </div>
        <div>
          <input type="checkbox" required />
          <span>i agree with the term and condition of this website </span>
        </div>
        <div>
          <button>Register</button>
          <span>
            already have an account <Link>SIGN IN</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Right_page;
