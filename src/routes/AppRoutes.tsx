import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../view/Home';
import Landing from '../view/Landing';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/r/:subreddit" component={Home} />
    <Route exact path="/" component={Landing} />
  </Switch>
);

export default AppRoutes;
