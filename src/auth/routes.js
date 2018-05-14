import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from './localStorage';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  if (Auth.getToken()) Auth.verifyToken();
  return (
    <Route
      {...rest}
      render={props =>
        Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
