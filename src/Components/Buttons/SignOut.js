import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from '../../Lib/Common/Axios';
import * as Session from '../../Lib/Helpers/Session';

export default class SignOut extends Component {
  signOut() {
    if (Session.decodedToken() === false) {
      console.log('im here!');
      return this.props.auth(false);
    }

    Axios.post(process.env.REACT_APP_API_SIGN_OUT_URL).then((response) => {
      Session.deleteToken();

      this.props.auth(false);
    });
  }

  render() {
    const props = this.props;

    if (props.IsSignedIn) {
      return (
        <li>
          <button className="sign-out-btn" onClick={this.signOut.bind(this)}>
            Sign Out
          </button>
        </li>
      );
    }

    return <Redirect to={props.referrer} />;
  }
}
