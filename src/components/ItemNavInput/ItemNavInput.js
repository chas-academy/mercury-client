import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ItemNavInput.css';

class ItemNavInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      description: '',
      cost: '',
      goal: '',
      notification: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  handleChange = (event) => {
    if (event.target.name === 'description') {
      this.setState({ description: event.target.value });
    } else if (event.target.name === 'cost') {
      this.setState({ cost: event.target.value });
    } else if (event.target.name === 'goal') {
      this.setState({ goal: event.target.value });
    } else if (event.target.name === 'notifications') {
      this.setState({ notification: event.target.value });
    }
  };

  goBack(event) {
    event.preventDefault();

    this.setState(previousState => ({
      currentStep: previousState.currentStep - 1,
    }));
  }

  goNext(event) {
    event.preventDefault();

    this.setState(previousState => ({
      currentStep: previousState.currentStep + 1,
    }));
  }

  render() {
    return (
      <div>
        {/* <ReactCSSTransitionGroup
          transitionName="progressButtonChange"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        > */}
        {this.state.currentStep === 1 && (
          <form key="1" onSubmit={this.handleSubmit}>
            <input
              className="step big"
              type="text"
              name="description"
              placeholder="Vad har du köpt?"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 2 && (
          <form key="2" onSubmit={this.handleSubmit}>
            <input
              className="step big"
              type="text"
              name="cost"
              placeholder="Vad kostar den?"
              value={this.state.cost}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 3 && (
          <form key="3" onSubmit={this.handleSubmit}>
            <input
              className="step big"
              type="text"
              name="goal"
              placeholder="Vad är ditt mål?"
              value={this.state.goal}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 4 && (
          <form key="4" onSubmit={this.handleSubmit}>
            <input
              className="step big"
              type="text"
              name="notifications"
              placeholder="Hur ofta vill du ha notiser?"
              value={this.state.notification}
              onChange={this.handleChange}
            />
          </form>
        )}
        {/* </ReactCSSTransitionGroup> */}
        <div className="btnGroup">
          <button onClick={this.goBack}>Back</button>
          <button onClick={this.goNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default ItemNavInput;
