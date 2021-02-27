import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ResetPassword } from "../../../Redux/Action/Auth";
import Loading from "../../../Utlits/Loading";
function Reset({ match }) {
  const [state, setstate] = useState({
    password: "",
    password2: "",
  });
  const history = useHistory();
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ResetPassword(state, match.params.id, history));
  };

  return (
    <div className="reset">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="reset-form">
            <h1>RESET PASSWORD</h1>

            <p>
              fill up the field below as required inorder to change your
              password, remember that password is a secret code that most not
              expose to another person.
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
                  onChange={(e) =>
                    setstate({ ...state, password: e.target.value })
                  }
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
        </>
      )}
    </div>
  );
}

export default Reset;
