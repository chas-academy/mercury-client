import React, { Component } from 'react';

import {
  LogInForm,
  PageTitle,
  Header,
  RegisterForm,
  Button,
  Box,
  LineButton
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
            <Box display="flex" variant="card">
              {this.state.displayRegister === true ? (
                <RegisterForm />
              ) : (
                <LogInForm />
              )}
              <LineButton onClick={this.toggleForms}>
                {this.state.displayRegister === true
                  ? 'Klicka här för att logga in istället'
                  : 'Klicka här för att registrera ett konto'}
              </LineButton>
            </Box>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default LogIn;
