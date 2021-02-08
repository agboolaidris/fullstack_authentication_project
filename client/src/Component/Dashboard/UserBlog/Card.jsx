import React from "react";
import { Link } from "react-router-dom";
function Card({ blog, setblogID }) {
  console.log(setblogID);
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
          <Link to="/edit">Edit</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
