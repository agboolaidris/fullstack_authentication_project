import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
function Profile() {
  return (
    <div className="div">
      <div className="image">
        <div className="img">
          <img src="" alt="" />
        </div>
        <span className="username">Idris Agboola</span>
        <span className="tagname">@idrisagboola</span>
      </div>

      <div className="edit-profile">
        <button>Edit Profile</button>
      </div>
      <div className="profile-info">
        <span>lagos Nigeria</span>
        <span>Web Developer</span>
      </div>
      <Logout />
    </div>
  );
}

export default Profile;
