// @flow
import React from 'react';
import './Button.css';

const Button = ({
  type = 'primary',
  shape = 'box',
  children,
  ...props
}: {
  type: string,
  shape: string,
  children: Object | string,
  props: {}
}) => (
  <button className={`button ${type} ${shape}`} {...props}>
    {children}
  </button>
);

export default Button;
