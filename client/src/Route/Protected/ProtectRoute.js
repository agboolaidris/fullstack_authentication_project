import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  return !rest.isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
