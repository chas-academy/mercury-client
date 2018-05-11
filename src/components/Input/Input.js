// @flow
import React from 'react';

import './Input.css';

type Variant = 'underlined' | 'regular';
type Unit = 'kr' | 'ggr';

const Input = ({ variant = 'underlined', unit = '', ...props }: { variant: Variant, unit: Unit }) => (
  <span className={`input ${variant}`}>
    <input {...props} />
    {unit !== '' ? <span>{unit}</span> : ''}
  </span>
);

export default Input;
