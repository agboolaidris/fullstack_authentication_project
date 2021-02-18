import React from "react";
import { Link } from "react-router-dom";

function Guest({ handleHarmburger }) {
  return (
    <ul>
      <Link to="/login" onClick={handleHarmburger}>
        Login
      </Link>
    </ul>
  );
}

export default Guest;
