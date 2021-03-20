import React, { Component } from 'react';
import NextButton from './widgets/NextButton.js';

export default function ActivityStage({advanceSection, instructions, components}) {
  let button = null;
  
  if (typeof advanceSection !== 'undefined') {
    button = (<NextButton onClick={advanceSection}/>);
  }
  
  return (
    <div className="container-fluid mt-2">
      {instructions}
      {components}
      {button}
    </div>
  );
}
