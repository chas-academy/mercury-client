import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ name, value, currency = 'kr', unit = '' }) => {
  return (
    <li className="item-detail">
      <span>{name}</span>
      <span>
        {value} {currency}
        <span>{unit && '/' + unit}</span>
      </span>
    </li>
  );
};

export default ItemDetail;
