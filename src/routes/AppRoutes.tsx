import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../view/Home';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default AppRoutes;
