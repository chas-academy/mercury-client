// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, AddItem, Settings, PageNotFound, LogIn } from '../../views';
import { GlobalNav, Loader, NotificationComponent } from '../';
import { authorizeToken } from '../../actions/user';
import './App.css';
import { PrivateRoute } from '../../auth/routes';

const mapStateToProps = ({ user }) => ({ user });

class App extends Component {
  componentDidMount() {
    this.props.dispatch(authorizeToken());
  }

  render() {
    const { fetchingUser, authenticated } = this.props.user;
    return fetchingUser ? (
      <Loader />
    ) : (
      <React.Fragment>
        <GlobalNav />
        <main className="content">
          <NotificationComponent />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <PrivateRoute path="/add" component={AddItem} />
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
