// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings, PageNotFound, LogIn } from '../../views';
import { GlobalNav } from '../';
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

const mapStateProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateProps)(App);
