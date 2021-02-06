import React from "react";
import ProtectedRoute from "./ProtectRoute";
import Post from "../../Component/Dashboard/PostBlog/Post";
import Trend from "../../Component/Dashboard/Trending/Trend";
import Setting from "../../Component/Dashboard/Setting/Setting";
import Favourite from "../../Component/Dashboard/Favourite/Favourite";
import Home from "../../Component/Dashboard/Home/Home";
import User from "../../Component/Dashboard/UserBlog";

function indexs() {
  return (
    <>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/post" component={Post} />
      <ProtectedRoute exact path="/user/profile" component={Setting} />
      <ProtectedRoute exact path="/trending" component={Trend} />
      <ProtectedRoute exact path="/favourite" component={Favourite} />
      <ProtectedRoute exact path="/user/blogs" component={User} />
    </>
  );
}

export default indexs;
