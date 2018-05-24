import React, { Component } from 'react';

import {
  LogInForm,
  PageTitle,
  Header,
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

  render() {
    return (
      <React.Fragment>
        <Header>
          <PageTitle
            title={
              this.state.displayRegister === true ? 'registrera' : 'logga in'
            }
          />
        </Header>
        <main>
          <section className="content">
            <Box display="flex column" variant="card">
              {this.state.displayRegister === true ? (
                <RegisterForm />
              ) : (
                <LogInForm />
              )}
              <span>eller</span>
              <Button color="link" onClick={this.toggleForms}>
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
