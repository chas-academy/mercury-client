import React from 'react';

import './Button.css';

const Button = ({ color = 'primary', ...props }) => (
  <button className={`button ${color}`} {...props} />
);

export default Button;
