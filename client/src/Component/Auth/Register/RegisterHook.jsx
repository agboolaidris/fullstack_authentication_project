import React, { useState, useEffect } from "react";
const useRegister = () => {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
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

export default useRegister;
