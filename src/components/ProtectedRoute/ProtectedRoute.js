import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  if (!props.isLogin){
    props.onPopupForSignup()
  }
  return (
    <Route>
      {() =>
        props.isLogin ? <Component {...props} /> : (<Redirect to='/'/>  )
      }
    </Route>
  );
};

export default ProtectedRoute;
