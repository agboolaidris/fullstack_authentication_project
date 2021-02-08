import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  return !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} {...rest} />;
      }}
    />
  );
}

export default ProtectedRoute;
