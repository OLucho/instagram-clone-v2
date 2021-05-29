import { Redirect, Route } from 'react-router';

interface HandleRoutesProps {
  isPrivate?: boolean;
  component: React.FC;
  exact: boolean;
  path: string;
}

const HandleRoutes: React.FC<HandleRoutesProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <>
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default HandleRoutes;

import React from 'react';
