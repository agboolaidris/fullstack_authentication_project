import React, { useState } from "react";
import Form from "./Form";
import Img from "../../../img/idris.png";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faMap,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
function Setting() {
  const Profile = useSelector((state) => state.User);
  const [edit, setedit] = useState(false);
  return (
    <div className="setting">
      {edit ? (
        <Form />
      ) : (
        <div className="profile">
          <span className="edit-icon" onClick={() => setedit(true)}>
            <FontAwesomeIcon icon={faEdit} />
            <br />
            Edit profile
          </span>
          <div className="imgbx">
            <img alt="profile pic" src={Img} />
          </div>
          <div className="div">
            <p className="name">Agboola idris</p>
            <p className="email">agboolaisholaidreez@gmail.com</p>
            <p className="job">Software developer</p>
            <p className="city">
              <FontAwesomeIcon icon={faMap} />
              &nbsp; Lagos,Nigeria
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
