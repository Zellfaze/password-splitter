import React, { Component } from 'react';
import SaveText from './SaveText.js';
import XofNBlock from '../../components/XofNBlock.js';
import NextButton from '../../components/NextButton.js';

class SaveActivityStage2 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      groupSize: 2,
      requiredMembers: 2
    };
    
    this.setGroupSize = this.setGroupSize.bind(this);
    this.setRequiredMembers = this.setRequiredMembers.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
  }
  
  advanceSection() {
    this.props.onNextSection(Number(this.state.groupSize), Number(this.state.requiredMembers));
  }
  
  setGroupSize(newSize) {
    this.setState({groupSize: newSize});
  }
  
  setRequiredMembers(newSize) {
    this.setState({requiredMembers: newSize});
  }
  
  render() {
    return (
      <div className="container-fluid mt-2">
        <SaveText />
        <XofNBlock setGroupSize={this.setGroupSize} setRequiredMembers={this.setRequiredMembers} groupSize={this.state.groupSize} requiredMembers={this.state.requiredMembers}/>
        <NextButton onClick={this.advanceSection}/>
      </div>
    );
  }
}

export default SaveActivityStage2; 
