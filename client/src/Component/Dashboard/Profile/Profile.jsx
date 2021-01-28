import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="img">
        <img src="" alt="" />
      </div>

      <Link to="/">Profile</Link>
      <button>Logout</button>
    </div>
  );
}

export default Profile;
