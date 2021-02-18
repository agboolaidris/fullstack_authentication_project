import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "../../../Redux/Action/Blog";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
function Card({ blog, setblogID }) {
  const Dispatch = useDispatch();
  return (
    <div className="card">
      <div className="img-container">
        <img src={blog.image} />
      </div>
      <div className="content">
        <p className="title">{blog.title}</p>
        <div className="line"></div>
        <div>
          <button className="delete" onClick={() => Dispatch(Delete(blog._id))}>
            <FontAwesomeIcon icon={faTrash} /> &nbsp;Delete
          </button>
          <Link
            to="/edit"
            onClick={() => setblogID(blog._id)}
            className="edits"
          >
            <FontAwesomeIcon icon={faEdit} />
            &nbsp;Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
