// @flow
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings } from '../../views';
import { GlobalNav } from '../';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddItem} />
      <Route path="/settings" component={Settings} />
    </Switch>
    <GlobalNav />
  </Fragment>
);

export default App;
