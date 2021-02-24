import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "../../../Redux/Action/Blog";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
function Card({ blog, setblogID }) {
  const Dispatch = useDispatch();
  return (
    <>
      <Link to={`/blog/${blog._id}`} className="imgbx">
        <img src={blog.image} />
      </Link>
      <div className="div">
        <div className="tag">
          <span>{blog.category.toUpperCase()}</span>
          <p className="line"></p>
        </div>
        <h3>{blog.title}</h3>
        <p className="article">
          {blog.body.slice(0, 150)} &nbsp;
          <Link to={`/blog/${blog._id}`}>Read more</Link>
        </p>
        <p className="lines"></p>
        <div className="icon">
          <button onClick={() => Dispatch(Delete(blog._id))}>
            <FontAwesomeIcon icon={faTrash} />
            <br />
            Delete
          </button>
          <Link to="/edit" onClick={() => setblogID(blog._id)}>
            <FontAwesomeIcon icon={faEdit} />
            <br /> Edit
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
