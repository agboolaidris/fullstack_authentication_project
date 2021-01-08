import React, { useState, useEffect } from "react";
const useRegister = (Register, error, clearError) => {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [Error, setError] = useState("");
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
    clearError();
  };

  useEffect(() => {
    if (error.id === "REGISTERATION FAIL") {
      setError(error.msg);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(state);
  };

  return { state, handleChange, handleSubmit, Error };
};

export default useRegister;
