import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveblogFetch } from "../../../Redux/Action/Blog";
import Loading from "../../../Utlits/Loading";
function Favourite() {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.Blog.saveBlog);
  console.log(blog);
  const isLoading = useSelector((state) => state.Blog.isLoading);
  useEffect(() => {
    dispatch(SaveblogFetch());
  }, [dispatch]);
  return (
    <div className="favourite">
      {isLoading ? (
        <Loading />
      ) : !blog.length ? (
        <h1>No BLOG SAVE</h1>
      ) : (
        <>
          {blog.map((blog) => {
            return <div key={blog._id}>HELLO</div>;
          })}
        </>
      )}
    </div>
  );
}

export default Favourite;
