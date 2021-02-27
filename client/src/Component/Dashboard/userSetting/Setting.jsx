import React, { useState, useEffect } from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../../Utlits/Loading";

function Setting() {
  const Profile = useSelector((state) => state.User.user);
  const isLoading = useSelector((state) => state.User.isLoading);
  const [edit, setedit] = useState(false);

  return (
    <div className="setting">
      {edit ? (
        <>{isLoading ? <Loading /> : <Form />}</>
      ) : (
        <div className="profile">
          <span className="edit-icon" onClick={() => setedit(true)}>
            <FontAwesomeIcon icon={faEdit} />
            <br />
            Edit profile
          </span>
          <div className="imgbx">
            {Profile.image && <img alt="profile pic" src={Profile.image} />}
          </div>
          <div className="div">
            <p className="name">
              <span className="title">Username:</span>&nbsp; {Profile?.username}
            </p>
            <p className="email">
              <span className="title">Email:</span>&nbsp; {Profile?.email}
            </p>
            <p className="job">
              <span className="title">Profession:</span>&nbsp;
              {Profile?.profession}
            </p>
            <p className="city">
              <span className="title">Location:</span>
              &nbsp; {Profile.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
