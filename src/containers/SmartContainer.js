// @flow
import React from 'react';
import { connect } from 'react-redux';
import { requestSignIn } from '../actions';

import { Button } from '../components';

const mapStateToProps = state => ({
  user: state,
});

class SmartContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>I'm a pretty smart container that is connected to redux!</h1>
        <Button onClick={() => this.props.dispatch(requestSignIn('fake'))}>
          Sign me in
        </Button>
        <div>{JSON.stringify(this.props.user)}</div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(SmartContainer);
