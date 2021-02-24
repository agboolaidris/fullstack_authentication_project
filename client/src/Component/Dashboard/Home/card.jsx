import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikeBlog, SaveBlog } from "../../../Redux/Action/Blog";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faSave } from "@fortawesome/free-solid-svg-icons";

function Card({ blog }) {
  const Dispatch = useDispatch();

  //confirm if user have save the blog
  const userID = useSelector((state) => state.User._id);
  const confirmSave = blog.favourite.find((e) => e === userID);

  return (
    <>
      <Link to={`/blog/${blog._id}`}>
        <div className="content">
          <h2 className="title">{blog.title}</h2>
        </div>
        <div className="img-container">
          <img src={blog.image} />
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
          <button
            onClick={() => Dispatch(SaveBlog(blog._id))}
            className={confirmSave && "color"}
          >
            <FontAwesomeIcon icon={faSave} /> &nbsp; save
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
