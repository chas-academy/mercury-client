// @flow
import * as React from 'react';
import './ProgressBar.css';

const ProgressBar =
 ({ ProgressBarMax, ProgressBarCurrent }:
 {ProgressBarMax: number, ProgressBarCurrent: number}) => (
   <progress
     max={ProgressBarMax}
     value={ProgressBarCurrent}
   >
     <p>Du har en gammal webbläsare</p>
   </progress>
 );

export default ProgressBar;

