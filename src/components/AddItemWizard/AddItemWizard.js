import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, LineButton, StepBar } from '../';
import AgAutocomplete from 'react-algoliasearch';

import { createItem, createItemWarning } from '../../actions/items';
import './AddItemWizard.css';

class AddItemWizard extends Component {
  constructor(props) {
    super(props);

    this.handleCanonicalChange = this.handleCanonicalChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      currentStep: 1,
      item: {
        goal: '',
        price: '',
        canonicalId: undefined,
      },
    };
  }

  handleCanonicalChange = (e) => {
    const id = e._args[0].canonicalId;

    this.setState({
      item: {
        goal: this.state.item.goal,
        price: this.state.item.price,
        canonicalId: id
      }
    });

  }

  handleChange = (e) => {
    if (e.target.name === 'price') {
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
      this.setState(previousState => ({
        currentStep: previousState.currentStep - 1,
      }));
    }
  }

  goNext(event) {
    event.preventDefault();

    if (this.state.currentStep < 4) {
      this.setState(previousState => ({
        currentStep: previousState.currentStep + 1,
      }));
    }
  }

  handleSubmit(event) {
    // TODO: Improve this check!
    event.preventDefault();
    if (
      this.state.item.goal === '' ||
      this.state.item.price === '' ||
      this.state.item.canonicalId === undefined
    ) {
      const errorMsg = 'Du måste fylla i ett giltigt pris/mål.'
      this.props.dispatch(createItemWarning(errorMsg));
    }
    else {
      this.props.dispatch(createItem(this.state.item));
    }
  }

  render() {
    return (
      <div className="formContainer">
        <StepBar currentStep={this.state.currentStep} />
        {this.state.currentStep === 1 && (
          <form key="1" onSubmit={this.handleSubmit}>
            <label htmlFor="canonical">Vad har du köpt?
            <AgAutocomplete
                value='canonicalItem'
                apiKey={'43f38932a41d9ec891aa4e996de8f4be'}
                appId={'O1ZPQGWGG4'}
                displayKey="name"
                indices={[{ index: 'canonical_items' }]}
                inputId="input-search"
                placeholder="Search..."
                selected={this.handleCanonicalChange}
              />
            </label>
          </form>
        )}

        {this.state.currentStep === 2 && (
          <form key="2" onSubmit={this.handleSubmit}>
            <label htmlFor="price">Vad kostade den?
              <Input
                type="number"
                name="price"
                placeholder=""
                value={this.state.item.price}
                onChange={this.handleChange}
                variant="underlined"
                unit="kr"
              />
            </label>
          </form>
        )}

        {this.state.currentStep === 3 && (
          <form key="3" onSubmit={this.handleSubmit}>
            <label htmlFor="goal">Vad är ditt mål?
              <Input
                type="number"              
                name="goal"
                placeholder=""
                value={this.state.item.goal}
                onChange={this.handleChange}
                variant="underlined"
                unit="ggr"
              />
            </label>
          </form>
        )}

        {this.state.currentStep === 4 && (
          <form key="4" onSubmit={this.handleSubmit}>
            <label htmlFor="notifications">
              Hur ofta vill du ha notiser?
              <Input
                disabled="true"
                name="notifications"
                placeholder="null"
                value={this.state.notification}
                onChange={this.handleChange}
                variant="underlined"
              />
            </label>
          </form>
        )}
        <div className="btnGroup">
          {this.state.currentStep > 1 ? (
            <LineButton onClick={this.goBack}>Tillbaka</LineButton>
          ) : (
              <LineButton onClick={this.goBack} disabled="disabled">Tillbaka</LineButton>
            )}

          {(this.state.currentStep === 1 && this.state.item.canonicalId !== undefined)
            || (this.state.currentStep === 2 && this.state.item.price > 0)
            || (this.state.currentStep === 3 && this.state.item.goal > 0) ?
            <LineButton onClick={this.goNext}>Nästa</LineButton> :
            this.state.currentStep === 4 ?
              <LineButton onClick={this.handleSubmit} type="submit">Spara</LineButton> :
              <LineButton disabled="disabled" onClick={this.goNext}>Nästa</LineButton>
          }
        </div>
      </div>
    );
  }
}

export default connect(null)(AddItemWizard);
