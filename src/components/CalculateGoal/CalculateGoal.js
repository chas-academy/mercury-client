import React from 'react';
import './CalculateGoal.css';

function CalculateGoal(props) {
  const goalPerUse = Math.ceil(props.item.price / props.item.goal);

  return props.item.goal > 0 ? (
    <div>
      <p className="goalResult">{goalPerUse} kr</p> <br />per användning
    </div>
  ) : (
    <p className="goalResult">...</p>
  );
}

export default CalculateGoal;
