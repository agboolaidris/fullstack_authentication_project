import React from "react";
import { useSelector } from "react-redux";

import Card from "./card";
import Loading from "../../../Utlits/Loading";

function Dashboard() {
  const Blogs = useSelector((state) => state.Blog.blogs);
  const isLoading = useSelector((state) => state.Blog.isLoading);

  return (
    <div className={isLoading ? "no-blog" : "dashboard"}>
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
