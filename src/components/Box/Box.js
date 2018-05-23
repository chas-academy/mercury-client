// @flow
import React from 'react';
import './Box.css';

const Box = ({
  variant = 'invisible',
  display = '',
  customClass = '',
  children
}: {
  variant: string,
  children: any
}) => (
  <div className={`box ${variant} ${display} ${customClass}`}>{children}</div>
);

export default Box;
