import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LikeBlog } from "../../../Action/BlogAction";
function Card({ blog }) {
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
          <button onClick={() => Dispatch(LikeBlog(blog._id))}>
            Like{blog.like}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
