import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../../Redux/Action/Blog";
import Card from "./Card";
import Loading from "../../../Utlits/Loading";
function Index({ setblogID }) {
  const userID = useSelector((state) => state.User._id);
  const blogs = useSelector((state) => state.Blog.blogs);
  const isLoading = useSelector((state) => state.Blog.isLoading);

  //userBlog
  const userBlogs = blogs.filter((blog) => blog?.userID === userID);

  return (
    <div
      className={isLoading ? "no-blog" : !userBlogs.length ? "no-blog" : "user"}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!userBlogs.length ? (
            <h1>You have no blog yet</h1>
          ) : (
            <>
              {userBlogs.map((blog) => {
                return (
                  <div key={blog._id}>
                    <Card blog={blog} setblogID={setblogID} />
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Index;
