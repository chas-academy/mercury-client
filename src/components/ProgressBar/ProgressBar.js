// @flow
import * as React from 'react';
import './ProgressBar.css';

function percent(foo: number, bar: number) {
  const percentage = Math.ceil(foo / bar * 100);
  return percentage;
}

const ProgressBar = ({
  progressBarMax,
  progressBarCurrent
}: {
  progressBarMax: number,
  progressBarCurrent: number
}) => (
  <span className="progressbar">
    <span>
      <h3>
        <span>användningar</span>
        {progressBarCurrent}
      </h3>
    </span>
    <progress
      className={
        percent(progressBarCurrent, progressBarMax) > 98 ? 'fullBar' : ''
      }
      max={100}
      value={
        percent(progressBarCurrent, progressBarMax) < 3
          ? 3
          : percent(progressBarCurrent, progressBarMax)
      }
    >
      <i>Du har en gammal webbläsare</i>
    </progress>
  </span>
);

export default ProgressBar;
