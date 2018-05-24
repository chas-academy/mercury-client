// @flow
import React, { Component } from 'react';
import type { ItemT } from '../../types';
import { Button, ProgressBar, Icon, ItemDetail } from '..';
import { calculateCostPerUse } from '../helpers';
import './Item.css';

type Props = Object;
type State = {
  isOpen: boolean
};

class Item extends Component<Props, State> {
  constructor(props: ItemT, handleIncrement, item) {
    super(props);
    // These bindings is necessary to make `this` work in callbacks
    this.toggleCard = this.toggleCard.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggleCard = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  incrementCounter = (data, event) => {
    this.setState(prevState => {
      this.props.item.delimiter++;
    });
    this.props.handleIncrement(data, event);
  };

  render() {
    const { item } = this.props;

    return (
      <article className="item">
        <header onClick={this.toggleCard}>
          <h2>{item.CanonicalItem.name}</h2>
          <div>
            <Icon icon={item.CanonicalItem.icon} />
          </div>
        </header>

        <div
          className={
            !this.state.isOpen ? 'item-details collapsed' : 'item-details'
          }
        >
          <ul>
            <ItemDetail
              name="kostnad"
              value={calculateCostPerUse(item.price, item.delimiter)}
              unit="anv"
            />

            <ItemDetail
              name="målkostnad"
              value={calculateCostPerUse(item.price, item.goal)}
              unit="anv"
            />

            <ItemDetail name="inköpspris" value={item.price} />
          </ul>
        </div>

        <footer className="item-footer">
          <ProgressBar
            progressBarMax={item.goal}
            progressBarCurrent={item.delimiter}
          />
          <Button
            type="primary"
            shape="round"
            onClick={e => this.incrementCounter(item.itemId, e)}
          >
            +1
          </Button>
        </footer>
      </article>
    );
  }
}

export default Item;
