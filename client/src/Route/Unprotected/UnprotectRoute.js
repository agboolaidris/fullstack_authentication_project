import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function UnProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default UnProtectedRoute;
