import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Facebook() {
  const responseFacebook = (res) => {
    console.log(res);
  };

  return (
    <>
      <FacebookLogin
        appId="756129875011975"
        autoLoad="false"
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="facebook-icon">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </button>
        )}
      />
    </>
  );
}

export default Facebook;
