import React, { useState } from "react";
import ProtectedRoute from "./ProtectRoute";
import Post from "../../Component/Dashboard/PostBlog/Post";
import Trend from "../../Component/Dashboard/TrendingBlog/Trend";
import Setting from "../../Component/Dashboard/userSetting/Setting";
import Favourite from "../../Component/Dashboard/Favourite/Favourite";
import Home from "../../Component/Dashboard/Home/Home";
import User from "../../Component/Dashboard/UserBlog";
import Edit from "../../Component/Dashboard/EditBlog/Edit";

function Index() {
  const [blogID, setblogID] = useState(null);
  return (
    <>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/post" component={Post} />
      <ProtectedRoute exact path="/profile" component={Setting} />
      <ProtectedRoute exact path="/trending" component={Trend} />
      <ProtectedRoute exact path="/favourite" component={Favourite} />
      <ProtectedRoute
        exact
        path="/user/blogs"
        component={User}
        setblogID={setblogID}
      />
      <ProtectedRoute
        exact
        path="/edit"
        component={Edit}
        blogID={blogID}
        setblogID={setblogID}
      />
    </>
  );
}

export default Index;
