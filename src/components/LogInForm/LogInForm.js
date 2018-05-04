import React, { Component } from 'react';
import JWT from 'jsonwebtoken';

import { Input } from '../';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    // e.preventDefault();
    // const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
    console.log(this.formData);
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

  //   const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);

  render() {
    return (
      <form onSubmit={this.onSubmit(this.formData)}>
        <Input type="email" placeholder="e-mail" value={this.state.formData.email} />
        <Input type="password" placeholder="lösenord" value={this.state.formData.password} />
        <button type="submit">
            skicka
        </button>
      </form>
    );
  }
}

export default LogInForm;
