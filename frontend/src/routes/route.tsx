import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { State } from '../redux/reducers';

interface HandleRoutesProps {
  isPrivate?: boolean;
  component: React.FC;
  exact: boolean;
  path: string;
}

const HandleRoutes: React.FC<HandleRoutesProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useSelector((state: State) => state.user);

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
