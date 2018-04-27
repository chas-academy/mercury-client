// @flow

import React, { Component } from 'react';
import './Item.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import type { ItemT } from '../../types';

type Props = Object;

type State = {
  isOpen: boolean,
};

class Item extends Component<Props, State> {
  constructor(props: ItemT) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.toggleCard = this.toggleCard.bind(this);

    this.state = { isOpen: false };
  }

  toggleCard = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { item } = this.props;

    return (
      <article id={item.id} onClick={this.toggleCard}>
        <h2>{item.name}</h2>
        {this.state.isOpen && (
          <dl>
            <dt>Mål:</dt>
            <dd>{item.goal}</dd>
            <dt>Användningar:</dt>
            <dd>{item.delimiter}</dd>
            <dt>Inköpspris:</dt>
            <dd>{item.price}</dd>
          </dl>
        )}
        <p>
          Framsteg<br />
          <ProgressBar
            progressBarMax={item.goal}
            progressBarCurrent={item.delimiter}
          />
        </p>
      </article>
    );
  }
}

export default Item;
