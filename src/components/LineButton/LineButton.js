// @flow
import React from 'react';

import './LineButton.css';

const LineButton = ({ ...props }: { variant: string }) => (
  <button className="lineButton" {...props} />
);

export default LineButton;
