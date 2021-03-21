import React, { Component } from 'react';
import NextButton from './widgets/NextButton.js';
import PropTypes from 'prop-types';

function ActivityStage({advanceSection, instructions, components}) {
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

ActivityStage.propTypes = {
  advanceSection: PropTypes.func,
  instructions: PropTypes.node.isRequired,
  components: PropTypes.node.isRequired
}

export default ActivityStage;
