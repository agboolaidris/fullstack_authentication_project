import React from "react";
import { Link } from "react-router-dom";

function Guset() {
  return (
    <ul>
      <li id="login">
        <Link to="/login">Login</Link>
      </li>
      <li id="register">
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
}

export default Guset;
