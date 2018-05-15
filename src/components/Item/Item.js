// @flow
import React, { Component } from 'react';
import type { ItemT } from '../../types';
import ProgressBar from '../ProgressBar/ProgressBar';
import IncrementButton from '../IncrementButton/IncrementButton';
import Icon from '../Icon/Icon';
import './Item.css';

type Props = Object;
type State = {
  isOpen: boolean
};

class Item extends Component<Props, State> {
  constructor(props: ItemT) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.toggleCard = this.toggleCard.bind(this);

    this.state = { isOpen: false };
  }
  toggleCard = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { item } = this.props;
    return (
      <article className="item" onClick={this.toggleCard}>
        <header>
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
        <IncrementButton itemId={item.itemId} />
      </article>
    );
  }
}

export default Item;
