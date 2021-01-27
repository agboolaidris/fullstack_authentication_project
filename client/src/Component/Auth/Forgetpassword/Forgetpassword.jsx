import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Forgetpassword() {
  const handleSubmit = () => {};
  return (
    <div className="forget">
      <div className="forget-form">
        <h1>FORGET PASSWORD</h1>
        <p>
          kindly insert the email address you register our account with, a mail
          will be sent to the email with a link to change your password as soon
          as you submit the correct email address.
        </p>
      </div>
      <form>
        <div className="input">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>}
            value={state.email}
            id="email"
          />
        </div>
      </form>
    </div>
  );
}

export default Forgetpassword;
