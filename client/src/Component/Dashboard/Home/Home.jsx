import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../../Redux/Action/Blog";
import Card from "./card";
import Loading from "../../../Utlits/Loading";

function Dashboard() {
  const Blogs = useSelector((state) => state.Blog.blogs);
  const isLoading = useSelector((state) => state.Blog.isLoading);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetch());
  }, [Dispatch]);
  return (
    <div className={isLoading ? "no-blog" : "dashboard"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!Blogs.length ? (
            <div>No Blog is posted yet</div>
          ) : (
            <>
              {Blogs.map((blog) => {
                return (
                  <div key={blog._id}>
                    <Card blog={blog} />
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

export default Dashboard;
