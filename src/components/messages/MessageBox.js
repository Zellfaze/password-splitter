// React imports
import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.timerID = null;
  }
  
  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.props.removeMessage(this.props.id);
    }, 5000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerID);
  }
  
  render() {
    const {
      message,
      level,
      id,
      removeMessage
    } = this.props;
    
    // If this is an error object instead of a raw string, extract the message
    let displayedMessage = message;
    if (typeof message === "object") {
      displayedMessage = message.message;
    }
    
    let classes = `alert alert-dismissible alert-${level}`;
    const close = (
      <FormattedMessage
        id="messagebox-close"
        defaultMessage="Close"
        description="This message is read by screen-readers when they are focused on the close button of error messages"
      />
    );
    
    return (
      <Alert variant={level} onClose={() => {removeMessage(id);}}>
        {message}&nbsp;
        <Button size="sm" className="btn-close" aria-label={close} onClick={() => {removeMessage(id);}} />
      </Alert>
    );
  }
}

MessageBox.propTypes = {
  message: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default MessageBox; 
