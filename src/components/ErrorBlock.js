import React, { Component } from 'react';
import MessageBox from './MessageBox.js';

//Props
//  {
//    messages: [
//      {message, level, id}
//    ],
//    removeMessage(id)
//  }

export default function ErrorBlock({messages, removeMessage}) {
  let messageBoxes = messages.map( (currentMessage) => {
    return <MessageBox message={currentMessage.message} level={currentMessage.level} key={currentMessage.id} id={currentMessage.id} removeMessage={removeMessage}/>
  });
  
  return (
    <div style={{position: "fixed", top: 15, right: 0, zIndex: 2}}>{messageBoxes}</div>
  );
}
 
