// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, AddItem, Settings, PageNotFound, LogIn } from '../../views';
import { GlobalNav, Loader } from '../';
import './App.css';
import { authorizeToken } from '../../actions/user';

const mapStateToProps = ({ user }) => ({ user });

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(authorizeToken());
  }

  render() {
    const { fetchingUser } = this.props;
    return fetchingUser ? (
      <Loader />
    ) : (
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
  }
}

export default withRouter(connect(mapStateToProps)(App));
