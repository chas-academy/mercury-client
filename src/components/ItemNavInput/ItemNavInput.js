import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Input, Button } from '../';

import { createItem } from '../../actions/items';
import './ItemNavInput.css';

class ItemNavInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      description: '',
      cost: '',
      goal: '',
      notification: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      currentStep: 1,
      item: {
        goal: null,
        price: null,
        canonicalId: null,
      },
    };
  }

  handleChange = (e) => {
    if (e.target.name === 'canonical') {
      this.setState({
        item: {
          goal: this.state.item.goal,
          price: this.state.item.price,
          canonicalId: e.target.value,
        },
      });
    } else if (e.target.name === 'price') {
      this.setState({
        item: {
          goal: this.state.item.goal,
          price: e.target.value,
          canonicalId: this.state.item.canonicalId,
        },
      });
    } else if (e.target.name === 'goal') {
      this.setState({
        item: {
          goal: e.target.value,
          price: this.state.item.price,
          canonicalId: this.state.item.canonicalId,
        },
      });
    } else if (e.target.name === 'notifications') {
      this.setState({ notification: e.target.value });
    }
  };

  goBack(event) {
    event.preventDefault();
    if (this.state.currentStep > 1) {
      this.setState((previousState) => ({
        currentStep: previousState.currentStep - 1
      }));
    }
  }

  goNext(event) {
    event.preventDefault();

    if (this.state.currentStep < 4) {
      this.setState((previousState) => ({
        currentStep: previousState.currentStep + 1
      }));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(createItem(this.state.item));
  }

  render() {
    return (
      <div className="formContainer">
        {/* <ReactCSSTransitionGroup
          transitionName="progressButtonChange"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        > */}
        {this.state.currentStep === 1 && (
          <form key="1" onSubmit={this.handleSubmit}>
            <label for="canonical">Vad har du köpt?</label>
            <Input
              name="canonical"
              placeholder="(canonicalId)"
              value={this.state.item.canonicalId}
              onChange={this.handleChange}
              variant="underlined"
            />
          </form>
        )}

        {this.state.currentStep === 2 && (
          <form key="2" onSubmit={this.handleSubmit}>
            <label for="price">Vad kostade den?</label>
            <Input
              name="price"
              placeholder="(price)"
              value={this.state.item.price}
              onChange={this.handleChange}
              variant="underlined"
            />
          </form>
        )}

        {this.state.currentStep === 3 && (
          <form key="3" onSubmit={this.handleSubmit}>
            <label for="goal">Vad är ditt mål?</label>
            <Input
              name="goal"
              placeholder="(goal)"
              value={this.state.item.goal}
              onChange={this.handleChange}
              variant="underlined"
            />
          </form>
        )}

        {this.state.currentStep === 4 && (
          <form key="4" onSubmit={this.handleSubmit}>
            <label htmlFor="notifications">
              Hur ofta vill du ha notiser? (detta finns inte än)
            </label>
            <input
              disabled="true"
              name="notifications"
              placeholder="null"
              value={this.state.notification}
              onChange={this.handleChange}
              variant="underlined"
            />
          </form>
        )}
        {/* </ReactCSSTransitionGroup> */}
        <div className="btnGroup">
          {this.state.currentStep > 1 ? (
            <Button onClick={this.goBack}>&#8249;</Button>
          ) : (
            ''
          )}
          {this.state.currentStep < 4 ? (
            <button onClick={this.goNext}>&#8250;</button>
          ) : (
            <button onClick={this.handleSubmit} type="submit">
              Spara
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null)(ItemNavInput);
