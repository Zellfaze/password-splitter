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
    this.remove = this.remove.bind(this);
  }
  
  remove() {
    this.props.removeMessage(this.props.id);
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
    let message = this.props.message;
    if (typeof this.props.message === "object") {
      message = this.props.message.message;
    }
    
    let classes = `alert alert-dismissible alert-${this.props.level}`;
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
        <button type="button" className="btn-close" aria-label={close} onClick={this.remove} />
      </div>
    );
  }
} 

export default MessageBox; 
