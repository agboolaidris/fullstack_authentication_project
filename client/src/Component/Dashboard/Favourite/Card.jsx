import React from "react";
import { useDispatch } from "react-redux";
import { LikeBlog, SaveBlog } from "../../../Redux/Action/Blog";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faSave } from "@fortawesome/free-solid-svg-icons";

function Card({ blog }) {
  const Dispatch = useDispatch();
  return (
    <div className="card">
      <Link to="/trending">
        <div className="img-container">
          <img src={blog.image} />
        </div>
        <div className="content">
          <p className="title">{blog.title}</p>
        </div>
      </Link>
      <div className="div">
        <span className="line"></span>
        <div className="icon">
          <button
            onClick={() => Dispatch(LikeBlog(blog._id))}
            className={blog.like.length > 0 && "color"}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            &nbsp;{blog.like.length}
          </button>
          <button onClick={() => Dispatch(SaveBlog(blog._id))}>
            <FontAwesomeIcon icon={faSave} /> &nbsp; save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
