// @flow
import React, { Component } from 'react';
import { Item } from '../';

class Items extends Component {
  constructor(items, handleIncrement, props) {
    super(props);
  }

  render() {
    const { items, handleIncrement } = this.props;

    return (
      <React.Fragment>
        {items.map(item => (
          <Item
            key={item.itemId}
            item={item}
            handleIncrement={handleIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Items;
