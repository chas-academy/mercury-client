// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings, PageNotFound, LogIn } from '../../views';
import { GlobalNav, NotficationComponent } from '../';
import './App.css';

const App = () => (
  <React.Fragment>
    <main className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddItem} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={LogIn} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </main>
    <GlobalNav />
  </React.Fragment>
);

export default App;
