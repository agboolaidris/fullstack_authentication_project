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
        <img src={Img} />
      </div>
      <div className="info">
        <h3 className="name">
          {profile.username ? profile.username : "GUSET"}
        </h3>
        <span className="job">{profile.job && profile.job}</span>
      </div>
    </div>
  );
}

export default Profile;
