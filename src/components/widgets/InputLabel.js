// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';

function InputLabel({id, children}) {
  return (
    <Form.Label htmlFor={id} className="form-label">
      {children}
    </Form.Label>
  );
}

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InputLabel;
