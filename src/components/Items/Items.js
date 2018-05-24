// @flow
import React, { Component } from 'react';
import { Item } from '../';

class Items extends Component {
  constructor(items, handleIncrement, props) {
    super(props);
  }

  componentDidMount() {
    document.body.style.backgroundImage ='linear-gradient(to bottom, #00a8b6, #00b3b6, #0abdb4, #2cc7ae, #49d1a7)';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
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
