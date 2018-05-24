import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, StepBar, CalculateGoal, Box, Button } from '../';
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
        canonical: {
          id: null,
          name: ''
        }
      }
    };
  }

  componentDidMount() {
    document.body.style.backgroundImage =
      'linear-gradient(to bottom, #b08fda, #cb8ed2, #e18fc8, #f391bb, #ff96ae)';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }

  handleCanonicalChange = e => {
    const id = e._args[0].canonicalId;
    const name = e._args[0].name;
    this.setState({
      item: {
        goal: this.state.item.goal,
        price: this.state.item.price,
        canonical: {
          id: id,
          name: name
        }
      }
    });
    this.goNext(e);
  };

  handleChange = e => {
    if (e.target.name === 'price') {
      this.setState({
        item: {
          goal: this.state.item.goal,
          price: e.target.value,
          canonical: {
            id: this.state.item.canonical.id,
            name: this.state.item.canonical.name
          }
        }
      });
    } else if (e.target.name === 'goal') {
      this.setState({
        item: {
          goal: e.target.value,
          price: this.state.item.price,
          canonical: {
            id: this.state.item.canonical.id,
            name: this.state.item.canonical.name
          }
        }
      });
    }
  };

  goBack(event) {
    event.preventDefault();
    if (this.state.currentStep > 1) {
      this.setState(previousState => ({
        currentStep: previousState.currentStep - 1
      }));
    }
  }

  goNext(event) {
    event.preventDefault();

    if (this.state.currentStep < 4) {
      this.setState(previousState => ({
        currentStep: previousState.currentStep + 1
      }));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.disabled = true;
    const itemToSave = {
      goal: this.state.item.goal,
      price: this.state.item.price,
      canonicalId: this.state.item.canonical.id
    };

    if (this.state.currentStep < 4) {
      this.goNext(event);
    } else if (
      this.state.item.goal === '' ||
      this.state.item.goal > 999999999 ||
      this.state.item.price === '' ||
      this.state.item.price > 999999999 ||
      this.state.item.canonical.id === undefined
    ) {
      const errorMsg = 'Du måste fylla i ett giltigt pris/mål.';
      this.props.dispatch(createItemWarning(errorMsg));
    } else {
      this.props.dispatch(createItem(itemToSave));
    }
  }

  render() {
    if (this.props.requestFullfilled) {
      return <Redirect to="/" />;
    } else
      return (
        <React.Fragment>
          <Box variant="card" display="flex column" customClass="formContainer">
            <StepBar currentStep={this.state.currentStep} />

            {this.state.currentStep === 1 && (
              <form className="add-item" key="1" onSubmit={this.handleSubmit}>
                <label htmlFor="canonical">Vad har du köpt?</label>
                <AgAutocomplete
                  defaultValue={this.state.item.canonical.name}
                  apiKey={'43f38932a41d9ec891aa4e996de8f4be'}
                  appId={'O1ZPQGWGG4'}
                  displayKey="name"
                  indices={[{ index: 'canonical_items' }]}
                  inputId="input-search"
                  placeholder=" "
                  selected={this.handleCanonicalChange}
                />
              </form>
            )}

            {this.state.currentStep === 2 && (
              <form className="add-item" key="2" onSubmit={this.handleSubmit}>
                <label htmlFor="price">Vad kostade den?</label>
                <Input
                  type="number"
                  name="price"
                  placeholder=""
                  value={this.state.item.price}
                  onChange={this.handleChange}
                  variant="underlined"
                  unit="kr"
                  max="999999999"
                  autoFocus
                />
              </form>
            )}

            {this.state.currentStep === 3 && (
              <form className="add-item" key="3" onSubmit={this.handleSubmit}>
                <CalculateGoal item={this.state.item} />
                <label htmlFor="goal">Vad är ditt mål? </label>
                <Input
                  type="number"
                  name="goal"
                  placeholder=""
                  value={this.state.item.goal}
                  onChange={this.handleChange}
                  variant="underlined"
                  unit="ggr"
                  max="999999999"
                  autoFocus
                />
              </form>
            )}

            {this.state.currentStep === 4 && (
              <Box display="flex column">
                <p>Du kommer lägga till: </p>
                <p>{this.state.item.canonical.name}</p>
                <p>
                  <strong>Inköpspris:</strong>&nbsp;{this.state.item.price}&nbsp;kr
                </p>
                <p>
                  <strong>Mål:</strong>&nbsp;{this.state.item.goal}&nbsp;användningar
                </p>
              </Box>
            )}

            <div className="btnGroup">
              {this.state.currentStep > 1 ? (
                <Button onClick={this.goBack}>Tillbaka</Button>
              ) : (
                <Button onClick={this.goBack} disabled="disabled">
                  tillbaka
                </Button>
              )}

              {(this.state.currentStep === 1 &&
                this.state.item.canonical.id !== null) ||
              (this.state.currentStep === 2 && this.state.item.price > 0) ||
              (this.state.currentStep === 3 && this.state.item.goal > 0) ? (
                <Button onClick={this.goNext}>Nästa</Button>
              ) : this.state.currentStep === 4 ? (
                <Button onClick={this.handleSubmit}>Spara</Button>
              ) : (
                <Button disabled="disabled" onClick={this.goNext}>
                  Nästa
                </Button>
              )}
            </div>
          </Box>
        </React.Fragment>
      );
  }
}

const mapStateToProps = state => ({
  requestFullfilled: state.items.requestFullfilled
});

export default connect(mapStateToProps)(AddItemWizard);
