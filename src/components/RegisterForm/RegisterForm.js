import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user';
import { Input, LineButton, Box }  from '../';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      birthDate: '',
      location: '',
      email: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = this.state;

    this.props.dispatch(registerUser(formData));
  }

  onInputChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Box>
        <form onSubmit={this.onSubmit}>
          <Input
            name="firstName"
            type="text"
            placeholder="Förnamn"
            value={this.state.firstName}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Efternamn"
            value={this.state.lastName}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <Input
            name="password"
            type="password"
            placeholder="Lösenord"
            value={this.state.password}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <Input
            name="birthDate"
            type="date"
            placeholder="Födelsedatum"
            value={this.state.birthDate}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <Input
            name="email"
            type="email"
            placeholder="E-post"
            value={this.state.email}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <Input
            name="location"
            type="text"
            placeholder="Plats"
            value={this.state.locaction}
            onChange={this.onInputChange}
            variant="underlined"
          />
          <LineButton>Registrera</LineButton>
        </form>
      </Box>
    );
  }
}

export default connect(null)(RegisterForm);
