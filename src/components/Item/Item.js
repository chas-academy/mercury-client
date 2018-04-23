// @flow
import * as React from "react";
import "./Item.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Item = ({ key, item }: { key: number, item: Object }) => (
  <article id={key}>
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
      <ProgressBar progressBarMax={100} progressBarCurrent={5} />
    </p>
  </article>
);

export default Item;
