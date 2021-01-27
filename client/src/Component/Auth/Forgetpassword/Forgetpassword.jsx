import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Forgetpassword() {
  const [state, setstate] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="forget">
      <div className="forget-form">
        <h1>FORGET PASSWORD</h1>
        <p>
          kindly insert the email address you register our account with, a mail
          will be sent to the email with a link to change your password as soon
          as you submit the correct email address.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setstate({ ...state, email: e.target.value })}
              value={state.email}
              id="email"
            />
          </div>
          <div className="btn-container">
            <Link to="/login">LOG IN</Link>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgetpassword;
