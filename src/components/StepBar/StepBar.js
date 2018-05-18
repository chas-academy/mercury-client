import React from 'react';
import { Icon } from '..';
import './StepBar.css';

function stepClass(step, currentstep) {
  if (step === currentstep) {
    return 'active';
  } else if (step < currentstep) {
    return 'done';
  }
  return '';
}

function stepIcon(step, currentstep, icon) {
  if (step < currentstep) {
    return 'checkmark';
  }
  return icon;
}

const StepBar = ({ currentStep }: { currentStep: number }) => (
  <div className="stepBar">
    <ul>
      <li className={stepClass(1, currentStep)}>
        <Icon icon={stepIcon(1, currentStep, 'home')} size="xsmall" />
      </li>
      <li className={stepClass(2, currentStep)}>
        <Icon icon={stepIcon(2, currentStep, 'moneybill')} size="xsmall" />
      </li>
      <li className={stepClass(3, currentStep)}>
        <Icon icon={stepIcon(3, currentStep, 'rocket')} size="xsmall" />
      </li>
      <li className={stepClass(4, currentStep)}>
        <Icon icon={stepIcon(4, currentStep, 'clock')} size="xsmall" />
      </li>
    </ul>
  </div>
);

export default StepBar;
