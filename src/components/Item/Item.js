// @flow
import React, { Component } from 'react';
import type { ItemT } from '../../types';
import { Button, ProgressBar, Icon } from '..';
import './Item.css';

type Props = Object;
type State = {
  isOpen: boolean
};

class Item extends Component<Props, State> {
  constructor(props: ItemT, handleIncrement, item) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.toggleCard = this.toggleCard.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);

    this.state = { isOpen: false };
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

        <table className={!this.state.isOpen ? 'collapsed' : ''}>
          <tr>
            <th scope="row">Nu</th>
            <td>582 kr</td>
            <td>anv</td>
          </tr>
          <tr>
            <th scope="row">Mål</th>
            <td>{item.goal} kr</td>
            <td>anv</td>
          </tr>

          <tr>
            <th scope="row">Inköpsris</th>
            <td>{item.price} kr</td>
            <td>18-05-18</td>
          </tr>
        </table>
        <Button
          shape="round"
          color="light"
          onClick={e => this.incrementCounter(item.itemId, e)}
        >
          +1
        </Button>
        <ProgressBar
          progressBarMax={item.goal}
          progressBarCurrent={item.delimiter}
        />
      </article>
    );
  }
}

export default Item;
