import React from 'react';

import './Progress.css';

const Progress = ({
  color = 'primary',
  value = '0',
  max = '100',
  children,
  ...props
}) => (
  <span className="progress-holder">
    <p>{value}%</p>
    {children}
    <progress
      className={`progress ${color}`}
      value={value}
      max={max}
      {...props}
    >
      {value}
    </progress>
  </span>
);

export default Progress;
