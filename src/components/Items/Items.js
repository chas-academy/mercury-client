// @flow
import React from 'react';
import { Item } from '../';
import './Items.css';

// const Items = ({ items }: { items: Array<ItemT> }) => (
class Items extends React.Component {
  constructor(
    items,
    handleIncrement,
    props,
  ) {
    super(props);
  }
  render() {
    const {
      items,
      handleIncrement,
    } = this.props;

    return (
      <div>
        <section className="items">
          {items.map(item => <Item key={item.itemId} item={item} handleIncrement={handleIncrement} />)}
        </section>
      </div>
    );
  }
}

export default Items;
