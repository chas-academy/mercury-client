// @flow
import React from 'react';
import { Item } from '../';
import './Items.css';

import type { ItemT } from '../../types';

const Items = ({ items }: { items: Array<ItemT> }) => (
  <section>
    {items.map(item => <Item key={item.id} item={item} />)}
  </section>
);

export default Items;
