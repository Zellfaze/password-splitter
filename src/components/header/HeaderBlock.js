// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Asset imports
import logo from './logo.svg';
import './HeaderBlock.css';

// Other imports
import constants from '../../lib/constants.js';

function HeaderBlock({headerText, changeActivity}) {
  return (
    <Container fluid>
      <Row className="header">
        <Col xs={12} className="header-top">
          <img src={logo} className="header-logo" alt="logo" onClick={() => {changeActivity(constants.activities.HOME);}}/>
          <h2>{headerText}</h2>
        </Col>
      </Row>
    </Container>
  );
}

HeaderBlock.propTypes = {
  headerText: PropTypes.node.isRequired,
  changeActivity: PropTypes.func.isRequired
}

export default HeaderBlock;
