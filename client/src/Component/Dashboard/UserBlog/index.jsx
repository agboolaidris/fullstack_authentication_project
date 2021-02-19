import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../../Redux/Action/Blog";
import Card from "./Card";
import Loading from "../../../Utlits/Loading";
function Index({ setblogID }) {
  const Dispatch = useDispatch();
  const blogs = useSelector((state) => state.Blog.userBlogs);
  const isLoading = useSelector((state) => state.Blog.isLoading);

  useEffect(() => {
    Dispatch(userFetch());
  }, [Dispatch]);

  return (
    <div className={isLoading ? "no-blog" : !blogs.length ? "no-blog" : "user"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!blogs.length ? (
            <h1>You have no blog yet</h1>
          ) : (
            <>
              {blogs.map((blog) => {
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
