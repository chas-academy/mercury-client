// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings, PageNotFound } from '../../views';
import { GlobalNav } from '../';
import './App.css';

const App = () => (
  <frosted-glass-container stretch="true">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddItem} />
      <Route path="/settings" component={Settings} />
      <Route path="/*" component={PageNotFound} />
    </Switch>
    <frosted-glass
      blur-amount="30px"
      overlay-color="#ffffff52"
      class="nav-container"
    >
      <GlobalNav />
    </frosted-glass>
  </frosted-glass-container>
);

export default App;
