import React from 'react';
import Main from './Main';
import AppContainer from '../components/AppContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meeting from './Meeting';
import Create from './Create';

const AppRouter = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/meeting/:id" component={Meeting} />
          <Route exact={false} path="/" component={Main} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default AppRouter;