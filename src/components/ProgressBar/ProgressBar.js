// @flow
import * as React from 'react';
import './ProgressBar.css';

function percent(foo: number, bar: number) {
  return Math.ceil((foo / bar) * 100);
}

const ProgressBar =
 ({ progressBarMax, progressBarCurrent }:
 {progressBarMax: number, progressBarCurrent: number}) => (
   <span>
     <span>{percent(progressBarCurrent, progressBarMax)} %</span>
     <progress
       max={progressBarMax}
       value={progressBarCurrent}
     >
       <i>Du har en gammal webbläsare</i>
     </progress>
   </span>
 );

export default ProgressBar;

