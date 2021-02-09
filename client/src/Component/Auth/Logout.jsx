import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Logout } from "../../Redux/Action/AuthAction";
import { connect } from "react-redux";
function logout({ Logout }) {
  return (
    <div className="logout" onClick={() => Logout()}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      <button>Logout</button>
    </div>
  );
}

export default connect(null, { Logout })(logout);
