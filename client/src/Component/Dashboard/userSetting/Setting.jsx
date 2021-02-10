import React, { useState } from "react";
import Form from "./Form";

function Setting() {
  const [edit, setedit] = useState(false);
  return (
    <div className="setting">
      {edit ? <Form /> : <div className="profile">hhhh</div>}
    </div>
  );
}

export default Setting;
