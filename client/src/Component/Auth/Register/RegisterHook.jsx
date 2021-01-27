import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const useRegister = (Register, msg, clearError, isAuthenticated) => {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [Error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
    clearError();
  };

  useEffect(() => {
    if (msg.id === "REGISTERATION FAIL") {
      setError(msg.msg);
    } else {
      setError("");
    }
  }, [msg]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(state);
  };

  return { state, handleChange, handleSubmit, Error };
};

export default useRegister;
