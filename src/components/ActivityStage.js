// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Container from 'react-bootstrap/Container';

// Component imports
import NextButton from './widgets/NextButton.js';

function ActivityStage({advanceSection, instructions, components}) {
  let button = null;
  
  if (typeof advanceSection !== 'undefined') {
    button = (<NextButton onClick={advanceSection}/>);
  }
  
  return (
    <Container className="mt-2">
      {instructions}
      {components}
      {button}
    </Container>
  );
}

ActivityStage.propTypes = {
  advanceSection: PropTypes.func,
  instructions: PropTypes.node.isRequired,
  components: PropTypes.node.isRequired
}

export default ActivityStage;
