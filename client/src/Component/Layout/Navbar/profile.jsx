import React from "react";
import profile from "../../../img/idris.png";

function Profile() {
  return (
    <div className="profile">
      <div className="img-container">
        <img src={profile} />
      </div>
      <div className="info">
        <h3 className="name">Agboola idris</h3>
        <span className="job">Software developer</span>
      </div>
    </div>
  );
}

export default Profile;
