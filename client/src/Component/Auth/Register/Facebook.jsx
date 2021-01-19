import React from "react";
import FacebookLogin from "react-facebook-login";

function Facebook() {
  const responseFacebook = (res) => {
    console.log(res);
  };

  const componentClicked = () => {
    console.log("clicked");
  };
  return (
    <>
      <FacebookLogin
        appId="756129875011975"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
      ,
    </>
  );
}

export default Facebook;
