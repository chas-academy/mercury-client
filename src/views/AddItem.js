import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ItemNav } from '../components';

const style = {
  fontSize: '2em',
  textAlign: 'center',
  marginTop: '1.6em',
};

class AddItem extends Component {
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
        <h1 style={style}>LÄGG TILL PRYL</h1>
        <ItemNav />
        {/* <ReactCSSTransitionGroup
          transitionName="progressButtonChange"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        > */}
        {this.state.currentStep === 1 && (
          <form className="inputForm" key="1" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Vad har du köpt?"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 2 && (
          <form className="inputForm" key="2" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="cost"
              placeholder="Vad kostar den?"
              value={this.state.cost}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 3 && (
          <form className="inputForm" key="3" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="goal"
              placeholder="Vad är ditt mål?"
              value={this.state.goal}
              onChange={this.handleChange}
            />
          </form>
        )}

        {this.state.currentStep === 4 && (
          <form className="inputForm" key="4" onSubmit={this.handleSubmit}>
            <input
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

export default AddItem;
