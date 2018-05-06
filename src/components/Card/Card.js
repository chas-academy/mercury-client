// @flow
import React from 'react';
import './Card.css';

const Card = ({
  variant = 'box',
  children,
}: {
variant: string,
children: any
}) => <div className={`card ${variant}`}>{children}</div>;

export default Card;
