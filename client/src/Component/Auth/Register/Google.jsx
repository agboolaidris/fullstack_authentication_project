import React from "react";
import { GoogleLogin } from "react-google-login";

function Google() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="652675837021-ia411pocr3npqdsfl65uagh1g4r61fc6.apps.googleusercontent.com"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          hello
        </button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
