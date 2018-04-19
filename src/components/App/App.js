// @flow
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings } from '../../views';
import { LinkList } from '../';

const App = () => (
  <Fragment>
    <LinkList />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddItem} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </Fragment>
);

export default App;
