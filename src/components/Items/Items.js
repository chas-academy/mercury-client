// @flow
import React, { Component } from 'react';
import { Item } from '../';
import './Items.css';

class Items extends Component {
  constructor(items, handleIncrement, props) {
    super(props);
  }

  render() {
    const { items, handleIncrement } = this.props;

    return (
      <section className="items">
        {items.map(item => (
          <Item
            key={item.itemId}
            item={item}
            handleIncrement={handleIncrement}
          />
        ))}
      </section>
    );
  }
}

export default Items;
