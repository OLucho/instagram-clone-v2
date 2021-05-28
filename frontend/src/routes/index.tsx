import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './route';
import { Edit, Main, Profile, SignIn, SignUp, Post } from '../pages';

export const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} isPrivate />
          <Route exact path="/photo/:photoId" component={Post} isPrivate />
          <Route exact path="/profile/:username" component={Profile} isPrivate />
          <Route exact path="/edit/:username" component={Edit} isPrivate />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
};
