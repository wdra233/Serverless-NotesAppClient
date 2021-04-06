import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={
            // We will use this later to redirect us back after the user logs in. 
            // We use the useLocation React Router hook to get this info.
          `/login?redirect=${pathname}${search}`
        } />
      )}
    </Route>
  );
}