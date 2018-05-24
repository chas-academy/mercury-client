// @flow
import React from 'react';
import './Button.css';

const Button = ({
  variant = 'primary',
  shape = 'box',
  children,
  ...props
}: {
  variant: string,
  shape: string,
  children: Object | string,
  props: {}
}) => (
  <button className={`button ${variant} ${shape}`} {...props}>
    {children}
  </button>
);

export default Button;
