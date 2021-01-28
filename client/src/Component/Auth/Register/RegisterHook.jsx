import React, { useState } from "react";

const useRegister = (Register) => {
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
    Register(state);
  };

  return { state, handleChange, handleSubmit };
};

export default useRegister;
