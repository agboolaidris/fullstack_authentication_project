import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { clearMessage } from "../../../Action/MessageAction";
function Reset({ clearMessage, msg, match }) {
  console.log(match.params);
  const [state, setstate] = useState({
    password: "",
    password2: "",
  });
  const [Msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  useEffect(() => {
    if (msg.id === "FORGETPASSWORD ERROR") {
      setMsg(msg.msg);
    } else if (msg.id === "FORGETPASSWORD SUCCESSFUL") {
      setMsg(msg.msg);
    } else {
      setMsg("");
    }
  }, [msg]);
  return (
    <div className="reset">
      <div className="reset-form">
        <h1>RESET PASSWORD</h1>
        <span
          className={msg.status === 200 ? "suc" : msg.msg ? "err " : "msg-none"}
        >
          {Msg}
          <span onClick={() => clearMessage()}>
            <FontAwesomeIcon icon={faTimes} />{" "}
          </span>
        </span>
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
const mapStateToProps = (state) => {
  return {
    msg: state.Msg,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { clearMessage })(Reset);
