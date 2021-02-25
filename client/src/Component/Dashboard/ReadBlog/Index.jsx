import React, { useEffect } from "react";
import Loading from "../../../Utlits/Loading";
import { useDispatch, useSelector } from "react-redux";
import { FetchEach } from "../../../Redux/Action/Blog";
function Index({ match }) {
  const blog = useSelector((state) => state.Blog.blog);
  const isLoading = useSelector((state) => state.Blog.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchEach(match.params.id));
  }, [dispatch]);
  return (
    <div className="read">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <div className="header">
            <h1 className="title">{blog.title}</h1>
            <span className="poster">
              posted by :<span> {blog.username}</span>
            </span>
            <span className="date">2th,feb 2020</span>
          </div>
          <div className="imgbx">
            <img src={blog.image} alt="" />
          </div>
          <p className="article">{blog.body}</p>
        </div>
      )}
    </div>
  );
}

export default Index;
