// @flow
import * as React from "react";
import "./Item.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Item = ({ key, item }: { key: number, item: Object }) => (
  <article id={key}>
    <h2>{item.itemTitle}</h2>
    <dl>
      <dt>Mål:</dt>
      <dd>{item.goal}</dd>
      <dt>Användningar:</dt>
      <dd>{item.usage}</dd>
      <dt>Inköpspris:</dt>
      <dd>{item.purchasePrice}</dd>
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
