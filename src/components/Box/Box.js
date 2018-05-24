// @flow
import React from 'react';
import './Box.css';

const Box = ({
  variant = '',
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
