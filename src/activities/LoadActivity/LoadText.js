// React imports
import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoadText() {
  return (
    <Row className="justify-content-center">
      <Col md="auto">
        <p>
          <FormattedMessage
            id="loadactivity-instructions"
            defaultMessage="Please fill out the following and then press Next."
            description="Load activity instructions for the top of the screen"
          />
        </p>
      </Col>
    </Row>
  );
} 

export default LoadText;
