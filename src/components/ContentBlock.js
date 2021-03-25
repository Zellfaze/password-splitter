// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

function ContentBlock({title, children}) {
  return (
    <Card className="text-dark bg-light mb-2">
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}

ContentBlock.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default ContentBlock;
