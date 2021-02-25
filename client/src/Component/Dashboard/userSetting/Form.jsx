import React, { useState } from "react";
import FileBase from "react-file-base64";
function Form() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    image: "",
    status: "",
    profession: "",
    location: "",
  });
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="div">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          value={state.username}
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <label>Email</label>
        <input
          type="text"
          placeholder="email address"
          value={state.email}
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className=" img">
        <label>Profile-picture</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setstate({ ...state, image: base64 })}
          className="img-input"
        />
      </div>
      <div className="div">
        <label>Profession</label>
        <input
          type="text"
          placeholder="profession"
          value={state.profession}
          id="profession"
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <label>Status</label>
        <textarea
          type="text"
          placeholder="add bio"
          value={state.status}
          id="status"
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <label>Location</label>
        <input
          type="text"
          placeholder="your location"
          value={state.location}
          id="location"
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
