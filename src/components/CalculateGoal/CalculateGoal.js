import React from 'react';
import './CalculateGoal.css';

function CalculateGoal(props) {
  const goalPerUse = Math.ceil(props.item.price / props.item.goal);

  return props.item.goal > 0 ? (
    <p>
      <p className="goalResult">{goalPerUse} kr</p> <br />per användning
    </p>
  ) : (
    ''
  );
}

export default CalculateGoal;
