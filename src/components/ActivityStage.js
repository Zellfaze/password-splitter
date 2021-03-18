import React, { Component } from 'react';
import NextButton from './NextButton.js';

class ActivityStage extends Component {
  render() {
    let button = null;
    
    if (typeof this.props.advanceSection !== 'undefined') {
      button = (<NextButton onClick={this.props.advanceSection}/>);
    }
    
    return (
      <div className="container-fluid mt-2">
        {this.props.instructions}
        {this.props.components}
        {button}
      </div>
    );
  }
}

export default ActivityStage; 
