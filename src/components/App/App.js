// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, AddItem, Settings, PageNotFound, LogIn } from '../../views';
import { GlobalNav, NotficationComponent } from '../';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NotficationComponent />
        <header className="banner">worth it</header>
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
    )
  }

};

export default App;
