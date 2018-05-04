import React, { Component } from 'react';

import { requestLogin } from '../../actions/user';
import { Input } from '../';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      formData: {
        email: '',
        password: '',
      },
    };
  }

  onSubmit(e) {
    e.preventDefault();
    requestLogin(this.state.formData);
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
