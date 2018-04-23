// @flow
import * as React from 'react';
import './Item.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Item = ({ itemId, itemTitle }: { itemId: number, itemTitle: string }) => (
  <article id={itemId}>
    <h2>{itemTitle}</h2>
    <dl>
      <dt>Mål:</dt>
      <dd>10 kr</dd>
      <dt>Användningar:</dt>
      <dd>55 ggr</dd>
      <dt>Inköpspris</dt>
      <dd>550 kr</dd>
    </dl>
    <p>
<<<<<<< 187c8e301ce7a6d48a1bd7e85a05734bff68ceea
        Framsteg<br />
      <ProgressBar progressBarMax={100} progressBarCurrent={5} />
=======
      Framsteg<br />
      <ProgressBar ProgressBarMax={100} ProgressBarCurrent={5} />
>>>>>>> Change name of props into camelCase
    </p>
  </article>
);

export default Item;
