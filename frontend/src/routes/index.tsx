import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './route';
import { Edit, Main, Profile, SignIn, SignUp, Post } from '../pages';

export const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/photo/:photoId" component={Post} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/edit/:username" component={Edit} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
};
