import React from 'react';

import './Input.css';

const Input = ({ variant = 'underlined', ...props }) => (
  <input className={`input ${variant}`} {...props} />
);

export default Input;
