import React from "react";
import { Link } from "react-router-dom";
function card({ blog }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={blog.image} />
      </div>
      <div className="content">
        <p className="title">{blog.title}</p>
        <p className="p">
          {blog.body}.{" "}
          <Link className="button" to="/">
            Read More
          </Link>
        </p>
        <div>
          <button className="delete">Delete</button>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
}

export default card;
