// @flow
import * as React from 'react';
import './Item.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import type { ItemT } from '../../types';

const Item = ({ item }: { item: ItemT }) => (
  <article id={item.id}>
    <h2>{item.name}</h2>
    <dl>
      <dt>Mål:</dt>
      <dd>{item.goal}</dd>
      <dt>Användningar:</dt>
      <dd>{item.delimiter}</dd>
      <dt>Inköpspris:</dt>
      <dd>{item.price}</dd>
    </dl>
    <p>
      Framsteg<br />
      <ProgressBar progressBarMax={item.goal} progressBarCurrent={item.delimiter} />
    </p>
  </article>
);

export default Item;
