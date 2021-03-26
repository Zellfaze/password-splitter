// React imports
import { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Col from 'react-bootstrap/Col';

function Sidebar(props) {
  return (
    <Col as="section" className="sidebar" md={{ span: 3, offset: 1, order: 'last' }} xs={{ order: 'first' }}>
      {props.children}
    </Col>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
