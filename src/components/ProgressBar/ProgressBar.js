// @flow
import * as React from 'react';
import './ProgressBar.css';

const ProgressBar =
 ({ progressBarMax, progressBarCurrent }:
 {progressBarMax: number, progressBarCurrent: number}) => (
   <span>
     <span>{progressBarCurrent} %</span>
     <progress
       max={progressBarMax}
       value={progressBarCurrent}
     >
       <i>Du har en gammal webbläsare</i>
     </progress>
   </span>
 );

export default ProgressBar;

