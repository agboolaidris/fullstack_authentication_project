import React, { useEffect } from "react";
import Img from "../../../img/idris.png";
import { Fetch } from "../../../Redux/Action/User";
import { useDispatch, useSelector } from "react-redux";
function Profile() {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(Fetch());
  }, [Dispatch]);
  const profile = useSelector((state) => state.User);
  return (
    <div className="profile">
      <div className="img-container">
        {profile.image && <img src={profile.image} />}
      </div>
      <div className="info">
        <h3 className="name">
          {profile.username ? profile.username : "GUSET"}
        </h3>
        <span className="job">{profile.profession && profile.profession}</span>
      </div>
      <p className="status">{profile.status && profile.status}</p>
    </div>
  );
}

export default Profile;
