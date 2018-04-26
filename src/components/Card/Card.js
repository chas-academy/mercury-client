// @flow
import React from 'react';

const Card = ({ variant = 'circle', children }) => (
  <div className={variant}>
    {children}
  </div>
);

export default Card;
