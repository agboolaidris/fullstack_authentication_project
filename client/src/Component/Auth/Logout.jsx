import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBlog } from "@fortawesome/free-solid-svg-icons";

function Logout() {
  return (
    <div className="logout">
      <FontAwesomeIcon icon={faHome} />
      <button>Logout</button>
    </div>
  );
}

export default Logout;
