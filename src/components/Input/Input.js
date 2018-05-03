import React from 'react';

import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Vad har du köpt?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Vad kostar den?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Vad är ditt mål?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Hur ofta vill du ha notiser?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Input;
