// @flow
import * as React from 'react';
import './Item.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Item = ({ ItemId, ItemTitle }: {ItemId: number, ItemTitle: string}) => (
  <article id={ItemId}>
    <h2>{ItemTitle}</h2>
    <dl>
      <dt>Mål:</dt>
      <dd>10 kr</dd>
      <dt>Användningar:</dt>
      <dd>55 ggr</dd>
      <dt>Inköpspris</dt>
      <dd>550 kr</dd>
    </dl>
    <p>
        Framsteg<br />
      <ProgressBar progressBarMax={100} progressBarCurrent={5} />
    </p>
  </article>
);

export default Item;

