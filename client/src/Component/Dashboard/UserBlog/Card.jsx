import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "../../../Action/BlogAction";
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
          <button className="delete" onClick={() => Delete(blog._id)}>
            Deletes
          </button>
          <Link to="/edit" onClick={() => setblogID(blog._id)}>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
