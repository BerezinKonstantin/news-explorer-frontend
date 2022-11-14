import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoginlocal = localStorage.getItem("isLogin");
  useEffect(() => {
    if (!props.isLogin && !isLoginlocal) {
      props.onPopupForSignup();
    }
  });

  return (
    <Route>
      {() =>
        props.isLogin || isLoginlocal ? (
          <Component {...props} />
        ) : (
          <Redirect to="/news-explorer-frontend" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
