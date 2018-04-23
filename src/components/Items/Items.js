// @flow
import React from 'react';
import './Items.css';
import { Item } from '../';

const ITEMS = [
  {
    itemId: 1,
    itemTitle: 'iphone X',
    goal: 100,
    usage: 300,
    purchasePrice: 12490,
    purchaseDate: '17-11-19',
  },
  {
    itemId: 2,
    itemTitle: 'Bose quietcomfort 35 ii',
    goal: 20,
    usage: 67,
    purchasePrice: 3990,
    purchaseDate: '18-03-01',
  },
  {
    itemId: 3,
    itemTitle: 'LOuIS VuITTON Belmont Damier Ebene Canvas',
    goal: 50,
    usage: 38,
    purchasePrice: 9995,
    purchaseDate: '16-11-23',
  },
  {
    itemId: 4,
    itemTitle: '15-tums MacBook Pro',
    goal: 100,
    usage: 20,
    purchasePrice: 32995,
    purchaseDate: '18-01-02',
  },
];

const ItemList = props => (
  <section>{ITEMS.map(item => <Item key={item.itemId} item={item} />)}</section>
);

export default ItemList;
