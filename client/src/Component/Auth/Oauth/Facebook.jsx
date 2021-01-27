import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Facebook({ oauthRegister }) {
  console.log(oauthRegister);
  const responseFacebook = (res) => {
    if (res) {
      console.log(res);
    } else {
      console.log(false);
    }
  };

  return (
    <>
      <FacebookLogin
        appId="756129875011975"
        callback={responseFacebook}
        fields="name, email, picture"
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
