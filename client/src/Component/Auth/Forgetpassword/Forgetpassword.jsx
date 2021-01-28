import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ForgetPassword } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import { clearMessage } from "../../../Action/MessageAction";
function Forgetpassword({ ForgetPassword, msg, clearMessage }) {
  const [state, setstate] = useState({
    email: "",
  });
  const [Msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    ForgetPassword(state);
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
    <div className="forget">
      <div className="forget-form">
        <h1>FORGET PASSWORD</h1>
        <span
          className={msg.status === 200 ? "suc" : msg.msg ? "err " : "msg-none"}
        >
          {Msg}
          <span onClick={() => clearMessage()}>
            <FontAwesomeIcon icon={faTimes} />{" "}
          </span>
        </span>
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
              required
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

const mapStateToProps = (state) => {
  return {
    msg: state.Msg,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { ForgetPassword, clearMessage })(
  Forgetpassword
);
