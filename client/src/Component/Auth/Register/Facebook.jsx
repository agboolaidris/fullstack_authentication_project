import React, {useState} from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Facebook() {
  const[state,setstate] =useState({
    username:'',
    email:'',
    password:'',
    password2:'',
    picture:''
  })

  const responseFacebook = (res) => {
    console.log(res)
    setstate({
      username:res.name,
      email:res.email,
      password:res.id,
      password2:res.id,
      picture:res.picture
    })
  
  };

  const handleClick = () => {
    console.log(state);
  };

  return (
    <>
      <FacebookLogin
        appId="756129875011975"
        callback={responseFacebook}
        onClick={handleClick}
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
