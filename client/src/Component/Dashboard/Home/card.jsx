import React from "react";
import { useDispatch } from "react-redux";
import { LikeBlog } from "../../../Redux/Action/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function Card({ blog }) {
  const Dispatch = useDispatch();
  return (
    <div className="card">
      <div className="img-container">
        <img src={blog.image} />
      </div>
      <div className="content">
        <p className="title">{blog.title}</p>
        <p className="p">{blog.body}</p>
        <div>
          <button
            onClick={() => Dispatch(LikeBlog(blog._id))}
            className={blog.like.length > 0 ? "color" : ""}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            &nbsp;{blog.like.length}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
