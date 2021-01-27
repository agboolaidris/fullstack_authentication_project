import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useLogin = (Login, msg, clearMessage, isAuthenticated) => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const [Error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
    clearMessage();
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (msg.id === "LOGIN FAIL") {
      setError(msg.msg);
    } else {
      setError("");
    }
  }, [msg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(state);
  };

  return { state, handleChange, handleSubmit, Error };
};

export default useLogin;
