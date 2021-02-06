import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../../Action/BlogAction";
import Card from "./card";

function Dashboard() {
  const Blogs = useSelector((state) => state.Blog.blogs);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetch());
  }, [Dispatch]);
  return (
    <div className={!Blogs.length ? "no-blog" : "dashboard"}>
      {!Blogs.length ? (
        <div className="div">No Blog is posted yet</div>
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
    </div>
  );
}

export default Dashboard;
