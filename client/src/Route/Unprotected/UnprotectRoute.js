import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

function UnProtectedRoute({ component: Component, ...rest }) {
  return rest.isAuthenticated ? (
    <Redirect to="/" />
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

export default connect(mapStateToProps)(UnProtectedRoute);
