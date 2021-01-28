import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "./Component/Auth/Login/Login";
import Register from "./Component/Auth/Register/Register";
import Navbar from "./Component/Layout/Navbar/Navbar";
import { checkAuth } from "./Action/AuthAction";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectRoute";
import Dashboard from "./Component/Dashboard/Dashboard";
import Forgetpassword from "./Component/Auth/Forgetpassword/Forgetpassword";
import Reset from "./Component/Auth/Resetpassword/Reset";
import UnprotectRoute from "./UnprotectRoute";
function App({ checkAuth, isAuthenticated }) {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <UnprotectRoute exact path="/login" component={Login} />
          <UnprotectRoute exact path="/register" component={Register} />
          <UnprotectRoute
            exact
            path="/forgetpassword"
            component={Forgetpassword}
          />
          <UnprotectRoute exact path="/resetpassword/:id" component={Reset} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { checkAuth })(App);
