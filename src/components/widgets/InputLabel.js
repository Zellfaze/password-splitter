import React, { Component } from 'react';
import PropTypes from 'prop-types';

function InputLabel({id, children}) {
  return (
    <label htmlFor={id} className="form-label">
      {children}
    </label>
  );
}

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InputLabel;
