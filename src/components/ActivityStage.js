import React, { Component } from 'react';
import NextButton from './NextButton.js';

class ActivityStage extends Component {
  render() {
    let button = null;
    if (this.props.advanceSection !== null) {
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
