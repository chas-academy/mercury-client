// @flow
import React from 'react';
import { Item } from '../';
import './Items.css';
import DUMMYDATA from '../../DummyData';

// import type { ItemT } from '../../types';
// Type annotation to implement further on (items: Array<ItemT>),
// instead of DUMMYDATA

const Items = ({ items = DUMMYDATA }) => (
  <section>{items.map(item => <Item key={item.id} item={item} />)}</section>
);

export default Items;
