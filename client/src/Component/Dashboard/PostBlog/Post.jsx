import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { post } from "../../../Redux/Action/BlogAction";
import FileBase from "react-file-base64";
function Post() {
  const [state, setstate] = useState({
    title: "",
    category: "",
    image: "",
    body: "",
  });
  const Dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(post(state));
    history.push("/");
  };
  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            required
            value={state.title}
            id="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Categories</label>
          <select
            onChange={handleChange}
            required
            value={state.category}
            id="category"
          >
            <option value="">------select------</option>
            <option value="education">Education</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="politics">Politics</option>
            <option value="health">Health</option>
            <option value="fashion">Fashion</option>
            <option value="love">Love</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>image</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setstate({ ...state, image: base64 })}
            className="img-input"
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            onChange={handleChange}
            required
            value={state.body}
            id="body"
          ></textarea>
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Post;
