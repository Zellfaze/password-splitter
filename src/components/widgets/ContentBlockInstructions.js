import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ContentBlockInstructions({children}) {
  return (
    <p className="card-text">
      {children}
    </p>
  );
}

ContentBlockInstructions.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentBlockInstructions;
