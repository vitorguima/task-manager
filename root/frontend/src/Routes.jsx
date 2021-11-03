import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import TasksFeed from './pages/TasksFeed';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/tasks" component={ TasksFeed } />
    </Switch>
  );
}

export default Routes;