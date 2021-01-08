import React, { useState, useEffect } from "react";
const useLogin = ({ Login, error, clearError }) => {
  console.log(error);
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const [Error, setError] = useState("");

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
    clearError();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (error === "LOGIN FAIL") {
      setError(error.msg);
    } else {
      setError("");
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(state);
  };

  return { state, handleChange, handleSubmit, Error };
};

export default useLogin;
