// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

function ContentBlockInstructions({children}) {
  return (
    <Card.Text>
      {children}
    </Card.Text>
  );
}

ContentBlockInstructions.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentBlockInstructions;
