// React imports
import React, { Component } from 'react';

// Bootstrap imports
import Col from 'react-bootstrap/Col';

function MainBox(props) {
  return (
    <Col as="main" className="main" md={8}>
      {props.children}
    </Col>
  );
}

export default MainBox;
