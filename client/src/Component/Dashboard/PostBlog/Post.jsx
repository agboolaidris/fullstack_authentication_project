import React, { useState } from "react";

function Post() {
  const [state, setstate] = useState({
    title: "",
    category: "",
    image: "",
    body: "",
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
            <option>------select------</option>
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
          <input
            onChange={handleChange}
            type="file"
            required
            className="img-input"
            id="image"
            value={state.image}
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
