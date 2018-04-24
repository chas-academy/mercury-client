// @flow
import React from 'react';
import { Item } from '../';
import './Items.css';

// import type { ItemT } from '../../types';
// Type annotation to implement further on (items: Array<ItemT>),

const Items = ({ items }) => (
  <section>
    {items.map(item => <Item key={item.id} item={item} />)}
  </section>
);

export default Items;
