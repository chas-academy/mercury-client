import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.props.dispatch(requestLogin(this.state.formData));
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
        <Input
          type="email"
          placeholder="e-mail"
          value={this.state.formData.email}
          onChange={this.onEmailChange}
          variant="underlined"
        />
        <Input
          type="password"
          placeholder="lösenord"
          value={this.state.formData.password}
          onChange={this.onPasswordChange}
          variant="underlined"
        />
        <button type="submit">skicka</button>
        <br />
        {this.props.authenticated ? 'du är inloggad' : 'du är inte inloggad'}
      </form>
    );
  }
}

const mapStateProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateProps)(LogInForm);
