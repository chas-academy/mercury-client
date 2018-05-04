// @flow
import React from 'react';

import './Input.css';

<<<<<<< HEAD
const Input = ({ variant = 'underlined', ...props }: { variant: string }) => (
  <input className={`input ${variant}`} {...props} />
=======
const Input = ({ color = 'light', ...props }: {color: string, props: any}) => (
  <input className={`${color}`} {...props} />
>>>>>>> Lots of edits of log in and css
);

export default Input;
