import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/user';
import { Input, Button } from '../';

import './LogInForm.css';

class LogInForm extends Component {
  constructor(props: Props) {
    super((props: Props));
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      formData: {
        email: '',
        password: ''
      }
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
        password: this.state.formData.password
      }
    });
  }

  onPasswordChange(e) {
    e.preventDefault();
    this.setState({
      formData: {
        email: this.state.formData.email,
        password: e.target.value
      }
    });
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <Input
          type="email"
          placeholder="E-post"
          value={this.state.formData.email}
          onChange={this.onEmailChange}
          variant="underlined"
        />
        <Input
          type="password"
          placeholder="Lösenord"
          value={this.state.formData.password}
          onChange={this.onPasswordChange}
          variant="underlined"
        />
        <Button color="primary">Logga in</Button>
      </form>
    );
  }
}

const mapStateProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateProps)(LogInForm);
