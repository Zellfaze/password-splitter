import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ContentBlock({title, children}) {
  return (
    <div className="card text-dark bg-light mb-2">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

ContentBlock.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default ContentBlock;
