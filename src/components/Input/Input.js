// @flow
import React from 'react';

import './Input.css';

<<<<<<< HEAD
const Input = ({ variant = 'underlined', ...props }: { variant: string }) => (
  <input className={`input ${variant}`} {...props} />
=======
const Input = ({ color = 'light', ...props }: {color: string, props: any}) => (
  <input className={`${color}`} {...props} />
>>>>>>> 09cb7bc811e6563771ff894eaf20e43d7d116250
);

export default Input;
