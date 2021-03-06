import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPageContainer from './containers';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPageContainer} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
