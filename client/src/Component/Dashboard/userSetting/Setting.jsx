import React, { useState } from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
function Setting() {
  const Profile = useSelector((state) => state.User);
  const [edit, setedit] = useState(false);
  return (
    <div className="setting">
      {edit ? (
        <Form />
      ) : (
        <div className="profile">
          <div className="imgbx">
            <img alt="profile pic" scr={Profile.image && Profile.image} />
          </div>
          <div>
            <p>Agboola idris</p>
            <p>Software developer</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
