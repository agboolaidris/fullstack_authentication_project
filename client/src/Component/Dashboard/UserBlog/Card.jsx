import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "../../../Action/BlogAction";
import { useDispatch } from "react-redux";
function Card({ blog, setblogID }) {
  const Dispatch = useDispatch();
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
          <button className="delete" onClick={() => Dispatch(Delete(blog._id))}>
            Delete
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
