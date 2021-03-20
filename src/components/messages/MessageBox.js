import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

//Props
//  {
//    message,
//    level,
//    id,
//    removeMessage(id)
//  }

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.timerID = null;
  }
  
  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.remove();
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
      <div className={classes}>
        {message}
        <button type="button" className="btn-close" aria-label={close} onClick={() => {removeMessage(id);}} />
      </div>
    );
  }
} 

export default MessageBox; 
