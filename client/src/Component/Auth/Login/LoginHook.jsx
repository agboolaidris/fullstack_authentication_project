import React, { useState } from "react";

const useLogin = (Login) => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(state);
  };

  return { state, handleChange, handleSubmit };
};

export default useLogin;
