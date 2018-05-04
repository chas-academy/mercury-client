import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestLogin } from '../../actions/user';
import { Input } from '../';
import './LogInForm.css';

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
<<<<<<< HEAD
      <section className="login">
=======
      <section>
>>>>>>> Lots of edits of log in and css
        <form onSubmit={this.onSubmit}>
          <Input
            type="email"
            placeholder="e-mail"
            value={this.state.formData.email}
            onChange={this.onEmailChange}
<<<<<<< HEAD
            variant="underlined"
=======
            className="big"
            autofocus="autofocus"
>>>>>>> Lots of edits of log in and css
          />
          <Input
            type="password"
            placeholder="lösenord"
            value={this.state.formData.password}
            onChange={this.onPasswordChange}
<<<<<<< HEAD
            variant="underlined"
          />
          <button type="submit">skicka</button>
          {this.props.authenticated ? 'du är inloggad' : 'du är inte inloggad'}
=======
            className="big"
          />
          <button type="submit">
            Logga in
          </button>
>>>>>>> Lots of edits of log in and css
        </form>
      </section>
    );
  }
}

const mapStateProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateProps)(LogInForm);
