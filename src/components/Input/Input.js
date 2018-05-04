import React from 'react';

import './Input.css';

const Input = ({ color = 'light', ...props }: {color: string, props: any}) => (
  <input className={`${color}`} {...props} />
);

export default Input;
