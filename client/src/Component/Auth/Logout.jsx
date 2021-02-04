import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Logout } from "../../Action/AuthAction";
import { connect } from "react-redux";
function logout({ Logout }) {
  return (
    <div className="logout" onClick={() => Logout()}>
      <FontAwesomeIcon icon={faHome} />
      <button>Logout</button>
    </div>
  );
}

export default connect(null, { Logout })(logout);
