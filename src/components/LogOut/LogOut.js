import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestLogin, requestLogout } from '../../actions/user';
import { Button, Loader } from '..';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

class LogOut extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.dispatch(requestLogout());
  }

  render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Button onClick={this.onLogout}>Logga ut</Button>;
    } else {
      return <Loader />;
    }
  }
}

export default withRouter(connect(mapStateToProps)(LogOut));
