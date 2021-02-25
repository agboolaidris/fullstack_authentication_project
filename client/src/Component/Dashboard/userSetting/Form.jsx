import React from "react";

function Form() {
  return (
    <form>
      <div className="div">
        <label>Username</label>
        <input type="text" />
      </div>
      <div className="div">
        <label>Email</label>
        <input type="text" />
      </div>
      <div className="div">
        <label>Profile</label>
        <input type="text" />
      </div>
      <div className="div">
        <label>Profession</label>
        <input type="text" />
      </div>
      <div className="div">
        <label>Status</label>
        <input type="text" />
      </div>
      <div className="div">
        <label>Location</label>
        <input type="text" />
      </div>
      <div className="div">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
