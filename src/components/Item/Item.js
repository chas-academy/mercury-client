// @flow
import React, { Component } from 'react';
import type { ItemT } from '../../types';
import ProgressBar from '../ProgressBar/ProgressBar';
import Icon from '../Icon/Icon';
import './Item.css';

type Props = Object;
type State = {
  isOpen: boolean
};

class Item extends Component<Props, State> {
  constructor(
    props: ItemT,
    handleIncrement,
    item,
  ) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.toggleCard = this.toggleCard.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);

    this.state = { isOpen: false };
  }

  toggleCard = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  incrementCounter = (data, event) => {
    this.setState((prevState) => {
      this.props.item.delimiter++;
    });
    this.props.handleIncrement(data, event)
  }

  render() {
    const { item } = this.props;

    return (
      <article className="item">
        <header onClick={this.toggleCard}>
          <h2>{item.CanonicalItem.name}</h2>
          <Icon icon={item.CanonicalItem.icon} />
        </header>

        <dl className={!this.state.isOpen ? 'collapsed' : ''}>
          <dt>Mål</dt>
          <dd>{item.goal}</dd>
          <dt>Användningar</dt>
          <dd>{item.delimiter}</dd>
          <dt>Inköpspris</dt>
          <dd>{item.price}</dd>
        </dl>

        <h3> Framsteg </h3>
        <ProgressBar
          progressBarMax={item.goal}
          progressBarCurrent={item.delimiter}
        />
        <button onClick={e => this.incrementCounter(item.itemId, e)}>Ny användning</button>
      </article>
    );
  }
}

export default Item;
