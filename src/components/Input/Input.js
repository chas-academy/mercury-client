// @flow
import React from 'react';

import './Input.css';

const Input = ({ variant = 'underlined', ...props }: { variant: string }) => (
  <input className={`input ${variant}`} {...props} />
);

export default Input;
