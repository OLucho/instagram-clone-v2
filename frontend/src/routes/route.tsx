import { Redirect, Route } from 'react-router';

export default function HandleRoutes({ isPrivate = false, component: Component, ...rest }) {
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
}
