import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="div">
      <div className="image">
        <div className="img">
          <img src="" alt="" />
        </div>
        <span>Idris Agboola</span>
      </div>

      <div className="edit-profile">
        <button>Edit Profile</button>
      </div>
      <div className="profile">
        <span>lagos Nigeria</span>
        <span>Web Developer</span>
      </div>

      <button>Logout</button>
    </div>
  );
}

export default Profile;
