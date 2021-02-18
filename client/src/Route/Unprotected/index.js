import React from "react";
import UnprotectRoute from "./UnprotectRoute";
import Login from "../../Component/Auth/Login/Login";
import Register from "../../Component/Auth/Register/Register";
import Forgetpassword from "../../Component/Auth/Forgetpassword/Forgetpassword";
import Reset from "../../Component/Auth/Resetpassword/Reset";
import Home from "../../Component/Dashboard/Home/Home";
function index() {
  return (
    <>
      <UnprotectRoute exact path="/" component={Home} />
      <UnprotectRoute exact path="/login" component={Login} />
      <UnprotectRoute exact path="/register" component={Register} />
      <UnprotectRoute exact path="/forgetpassword" component={Forgetpassword} />
      <UnprotectRoute exact path="/resetpassword/:id" component={Reset} />
    </>
  );
}

export default index;
