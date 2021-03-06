import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestLogout } from '../../actions/user';
import { Button } from '..';

class LogOut extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.dispatch(requestLogout());
  }

  render() {
    return (
      <Button variant="warning" onClick={this.onLogout} style={{width:'100%'}}>
        Logga ut
        </Button>
    );
  }
}

export default withRouter(connect()(LogOut));
