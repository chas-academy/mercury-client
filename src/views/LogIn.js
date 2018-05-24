import React, { Component } from 'react';

import {
  LogInForm,
  RegisterForm,
  Button,
  Box
} from '../components';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.toggleForms = this.toggleForms.bind(this);

    this.state = {
      displayRegister: false
    };
  }

  toggleForms(e) {
    e.preventDefault();
    this.setState({
      displayRegister: !this.state.displayRegister
    });
  }

  componentWillMount() {
    document.body.style.backgroundImage =
      'linear-gradient(to bottom, #f2994a, #ff8572, #fc7d9e, #df83c3, #b08fda)';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <section className="content">
            <Box display="flex column" variant="card">
              <h2 class="logo">Worth It</h2>
              {this.state.displayRegister === true ? (
                <RegisterForm />
              ) : (
                <LogInForm />
              )}
              <span>eller</span>
              <Button variant="link" onClick={this.toggleForms}>
                {this.state.displayRegister === true
                  ? 'logga in'
                  : 'registrera ett konto'}
              </Button>
            </Box>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default LogIn;
