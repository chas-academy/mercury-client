import React, { Component } from 'react';
import JWT from 'jsonwebtoken';

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
    // const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
    console.log(this.state.formData);
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
