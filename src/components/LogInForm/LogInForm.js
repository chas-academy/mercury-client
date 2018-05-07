import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestLogin } from '../../actions/user';
import { Input } from '../';
<<<<<<< HEAD
import { Icon } from '../';
import './LogInForm.css';
=======
import './LogInForm.css';

type Props = Object;
>>>>>>> 09cb7bc811e6563771ff894eaf20e43d7d116250

class LogInForm extends Component {
  constructor(props: Props) {
    super(props: Props);
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
        <Icon
          icon="signin"
          size="large"
        />
=======

      <section className="login">
>>>>>>> 09cb7bc811e6563771ff894eaf20e43d7d116250
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
>>>>>>> 09cb7bc811e6563771ff894eaf20e43d7d116250
          />
          <Input
            type="password"
            placeholder="lösenord"
            value={this.state.formData.password}
            onChange={this.onPasswordChange}
<<<<<<< HEAD
            variant="underlined"
          />
          <button type="submit">Logga in</button>
        </form>
        {/* this.props.authenticated ? 'du är inloggad' : 'du är inte inloggad' */}
      </section>
=======
            className="big"
          />
          <button type="submit">
            Logga in
          </button>
          <p>
            {this.props.authenticated ? 'du är inloggad' : 'du är inte inloggad' }
          </p>
        </form>
      </section>

>>>>>>> 09cb7bc811e6563771ff894eaf20e43d7d116250
    );
  }
}

const mapStateProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateProps)(LogInForm);
