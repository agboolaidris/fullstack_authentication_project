import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ForgetPassword } from "../../../Redux/Action/Auth";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../../Utlits/Loading";

function Forgetpassword() {
  const [state, setstate] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ForgetPassword(state));
  };

  return (
    <div className="forget">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="forget-form">
            <h1>FORGET PASSWORD</h1>

            <p>
              kindly input the email address your account is register with, you
              will recieve a mail via the email address inorder for you to
              change the previous password.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input">
                {" "}
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </label>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setstate({ ...state, email: e.target.value })
                  }
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
        </>
      )}
    </div>
  );
}

export default Forgetpassword;
