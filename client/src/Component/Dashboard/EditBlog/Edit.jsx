import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { patch } from "../../../Redux/Action/BlogAction";
import FileBase from "react-file-base64";
function Edit({ blogID }) {
  // mapStateToprops
  const editBlog = useSelector((state) =>
    state.Blog.userBlogs.find((blog) => blog._id === blogID)
  );

  //data
  const [state, setstate] = useState({
    title: editBlog.title,
    category: editBlog.category,
    image: editBlog.image,
    body: editBlog.body,
  });

  //mapDispatch to props
  const Dispatch = useDispatch();

  //redirect
  const history = useHistory();

  //handle form change
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(patch(blogID, state));
    history.push("/");
    setstate({
      ...state,
      title: "",
      category: "",
      body: "",
      image: "",
    });
  };

  return (
    <div className="edit">
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

export default Edit;
