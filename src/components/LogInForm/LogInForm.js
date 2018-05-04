import React, { Component } from 'react';
import JWT from 'jsonwebtoken';
import Axios from 'axios';

import { Input } from '../';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
    //   key: Date.now(),
      formData: {
        email: '',
        password: '',
      },
    //   alertMessage: {},
    //   showAlertMessage: false,
    //   isSigningIn: false,
    //   redirect: '/',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const token = JWT.sign(this.state.formData, process.env.REACT_APP_API_JWT_SECRET);
    Axios.post(process.env.REACT_APP_API_SIGN_IN_URL, { token })
      .then((response) => {
        console.log(response);
      });
    // TODO: Add redux logic that handles logged-in status
    // when a token is successfully returned
    // this.setState({
    //   key: Date.now(),
    //   formData,
    //   alertMessage: {
    //     type: 'info',
    //     message: 'logging in...',
    //   },
    //   isSigningIn: true,
    //   showAlertMessage: true,
    // });
  }

  onEmailChange(e) {
    e.preventDefault();
    this.setState({
      formData: {
        email: e.target.value,
        password: this.state.formData.password,
      },
    });
  }

  onPasswordChange(e) {
    e.preventDefault();
    this.setState({
      formData: {
        email: this.state.formData.email,
        password: e.target.value,
      },
    });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input type="email" placeholder="e-mail" value={this.state.formData.email} onChange={this.onEmailChange} />
        <Input type="password" placeholder="lösenord" value={this.state.formData.password} onChange={this.onPasswordChange} />
        <button type="submit">
            skicka
        </button>
      </form>
    );
  }
}

export default LogInForm;
