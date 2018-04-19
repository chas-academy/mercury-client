// @flow
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSignIn } from '../actions';

/*  TODO: convert into a stateless functional component
    I've created this component with the purpose of illustrating
    a way to connect the client & the api. - Anna
*/
/* eslint-disable */

const mapStateToProps = state => ({
  user: state,
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>worth it</h1>
        <button onClick={() => this.props.dispatch(requestSignIn('fake'))}>
          Sign me in
        </button>

        <div>
          {JSON.stringify(this.props.user)}
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add item</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
