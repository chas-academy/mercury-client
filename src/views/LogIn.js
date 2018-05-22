import React, { Component } from 'react';

import { LogInForm, PageTitle, Header, RegisterForm } from '../components';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.toggleForms = this.toggleForms.bind(this);

    this.state = {
      displayRegister: false
    }
  }

  toggleForms(e) {
    e.preventDefault();
    this.setState({
      displayRegister: !this.state.displayRegister
    });
  }

  render() {
    if (this.state.displayRegister === true) {
      return (
        <React.Fragment>
          <Header>
            <PageTitle title="registrera" />
          </Header>
          <main className="content">
            <RegisterForm />
            <button onClick={this.toggleForms}>
              Klicka här för att logga in
          </button>
          </main>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header>
            <PageTitle title="logga in" />
          </Header>
          <main className="content">
            <LogInForm />
            <button onClick={this.toggleForms}>
              Klicka här för att registrera
          </button>
          </main>
        </React.Fragment>
      )
    }
  }
}

export default LogIn;