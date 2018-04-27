// @flow
import React from 'react';

const Card = ({ variant = 'circle', children }: {variant: string, children: any}) => (
  <div className={variant}>
    {children}
  </div>
);

export default Card;
