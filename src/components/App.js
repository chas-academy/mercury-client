// @flow
import React from 'react';
import { connect } from 'react-redux';
import { requestSignIn } from '../actions';

/*  TODO: convert into a stateless functional component
    I've created this component with the purpose of illustrating
    a way to connect the client & the api. - Anna
*/
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
          { JSON.stringify(this.props.user) }
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
