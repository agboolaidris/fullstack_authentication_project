import React, { useState, useEffect } from "react";
const useLogin = () => {
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
    console.log(state);
  };

  return { state, handleChange, handleSubmit };
};

export default useLogin;
