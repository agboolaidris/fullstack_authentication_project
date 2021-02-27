import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../../Utlits/Loading";
import Card from "./Card";

function Favourite() {
  const blogs = useSelector((state) => state.Blog.blogs);
  const isLoading = useSelector((state) => state.Blog.isLoading);
  const userID = useSelector((state) => state.User.user._id);
  //save blogs
  const saveBlogs = blogs.filter((blog) =>
    blog.favourite.find((e) => e === userID)
  );

  return (
    <div className={isLoading || !saveBlogs.length ? "no-blog" : "favourite"}>
      {isLoading ? (
        <Loading />
      ) : !saveBlogs.length ? (
        <h1>No BLOG SAVE</h1>
      ) : (
        <>
          {saveBlogs.map((blog) => {
            return (
              <div key={blog._id} className="card">
                <Card blog={blog} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Favourite;
