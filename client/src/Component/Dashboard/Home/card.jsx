import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikeBlog, SaveBlog } from "../../../Redux/Action/Blog";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faSave } from "@fortawesome/free-solid-svg-icons";

function Card({ blog }) {
  const Dispatch = useDispatch();

  //confirm if user have save the blog
  const userID = useSelector((state) => state.User.user._id);
  const confirmSave = blog.favourite.find((e) => e === userID);
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
          <button
            onClick={() => Dispatch(LikeBlog(blog._id))}
            className={blog.like.length > 0 ? "color like" : "like"}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <br />
            {blog.like.length}
          </button>
          <button
            onClick={() => Dispatch(SaveBlog(blog._id))}
            className={confirmSave ? "color save" : "save"}
          >
            <FontAwesomeIcon icon={faSave} /> &nbsp;
            <br /> save
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
