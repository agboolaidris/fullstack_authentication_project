import React from "react";

function Post() {
  const handleChange = () => {};
  return (
    <div className="post">
      <form>
        <div>
          <label>Title</label>
          <input type="text" required />
        </div>
        <div>
          <label>Categories</label>
          <select onChange={handleChange} required>
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
          />
        </div>
        <div>
          <label>Body</label>
          <textarea onChange={handleChange} required></textarea>
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Post;
