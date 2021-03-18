import React, { Component } from 'react';
import MessageBox from './MessageBox.js';

//Props
//  {
//    messages: [
//      {message, level, id}
//    ],
//    removeMessage(id)
//  }

class ErrorBlock extends Component {
  render() {
    let messageBoxes = this.props.messages.map( (currentMessage) => {
      return <MessageBox message={currentMessage.message} level={currentMessage.level} key={currentMessage.id} id={currentMessage.id} removeMessage={this.props.removeMessage}/>
    });
    
    return (
      <div style={{position: "fixed", top: 15, right: 0, zIndex: 2}}>{messageBoxes}</div>
    );
  }
}

export default ErrorBlock; 
 
 
