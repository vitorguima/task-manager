import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import ProjectsFeed from './pages/ProjectsFeed';
import ProjectDetails from './pages/ProjectDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/projects/:userId" component={ ProjectsFeed } />
      <Route exact path="/projects/:userId/:projectId" component={ ProjectDetails }/>
    </Switch>
  );
}

export default Routes;