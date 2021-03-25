// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import MessageBox from './MessageBox.js';

function ErrorBlock({messages, removeMessage}) {
  let messageBoxes = messages.map( (currentMessage) => {
    return <MessageBox message={currentMessage.message} level={currentMessage.level} key={currentMessage.id} id={currentMessage.id} removeMessage={removeMessage}/>
  });
  
  return (
    <div style={{position: "fixed", top: 15, right: 0, zIndex: 2}}>{messageBoxes}</div>
  );
}
 
ErrorBlock.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.node.isRequired,
    level: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  removeMessage: PropTypes.func.isRequired
}

export default ErrorBlock;
