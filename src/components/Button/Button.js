import React from 'react';

import './Button.css';

const Button = ({ color = 'default', ...props }) => (
  <button className={`App-button ${color}`} {...props} />
);

export default Button;
