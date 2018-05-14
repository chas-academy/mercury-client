import React from 'react';
import './CalculateGoal.css';

function CalculateGoal(props) {
  const goalPerUse = Math.ceil(props.item.price / props.item.goal);
  return goalPerUse;
}

export default CalculateGoal;
