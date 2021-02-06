import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../../Action/BlogAction";
import Card from "./Card";
function Index() {
  const Dispatch = useDispatch();
  const blogs = useSelector((state) => state.Blog.userBlogs);

  useEffect(() => {
    Dispatch(userFetch());
  }, [Dispatch]);

  return (
    <div className="user">
      {!blogs.length ? (
        <h1>Loading.............</h1>
      ) : (
        <>
          {blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <Card blog={blog} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Index;
