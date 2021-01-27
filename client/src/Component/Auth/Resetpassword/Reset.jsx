import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Reset() {
  const [state, setstate] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="reset">
      <div className="reset-form">
        <h1>RESET PASSWORD</h1>
        <p>
          fill up the field below as required inorder to change your password,
          remember that password is a secret code that most not expose to
          another person.
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

export default Reset;
