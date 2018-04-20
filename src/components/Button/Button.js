import React from 'react';

import './Button.css';
/* TODO: incorporate a way to add an icon to <Button />
         add props validation
         figure out/refactor implementation of label & title
*/

const Button = ({
  color = 'primary',
  label = null,
  children,
  ...props
}) => (
  <button className={`button ${color}`} {...props} label={label}>
    {children}
  </button>
);

export default Button;
