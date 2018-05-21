// @flow
import React from 'react';
import './Box.css';

const Box = ({
  variant = 'seamless',
  children
}: {
  variant: string,
  children: any
}) => <div className={`box ${variant}`}>{children}</div>;

export default Box;
