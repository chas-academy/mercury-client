import React from 'react';

import './Input.css';

const Input = ({ color = 'light', ...props }) => (
  <input className={`${color}`} {...props} />
);

export default Input;
