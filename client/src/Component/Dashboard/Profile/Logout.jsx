import React from "react";
import { connect } from "react-redux";
import { Logout } from "../../../Action/AuthAction";

function Logout_Btn({ Logout }) {
  const handleClick = () => {
    Logout();
  };
  return (
    <button id="logout" onClick={handleClick}>
      Logout
    </button>
  );
}

export default connect(null, { Logout })(Logout_Btn);
