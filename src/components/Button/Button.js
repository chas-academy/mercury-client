import React from 'react';

import './Button.css';
/* TODO: add props validation */

const Button = ({ color = 'default', children, ...props }: {color: string, children: any, props: {}}) => (
  <button className={`button ${color}`} {...props}>
    {children}
  </button>
);

export default Button;
