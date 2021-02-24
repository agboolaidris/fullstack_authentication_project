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
    <div className={isLoading || !Blogs.length ? "no-blog" : "dashboard"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!Blogs.length ? (
            <h1>No Blog is posted yet</h1>
          ) : (
            <>
              {Blogs.map((blog) => {
                return (
                  <div key={blog._id} className="card">
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
