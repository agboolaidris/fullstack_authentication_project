import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Reset() {
  const [state, setstate] = useState({
    password: "",
    password2: "",
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
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
            </label>
            <input
              required
              type="password"
              placeholder="enter your new password"
              onChange={(e) => setstate({ ...state, password: e.target.value })}
              value={state.email}
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
              placeholder="confirm your password"
              onChange={(e) =>
                setstate({ ...state, password2: e.target.value })
              }
              value={state.email}
              id="password2"
            />
          </div>
          <div className="btn-container">
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
