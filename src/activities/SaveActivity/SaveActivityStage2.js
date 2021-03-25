// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import XofNBlock from '../../components/contentblocks/XofNBlock.js';

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
      <ActivityStage components={
        <XofNBlock setGroupSize={this.setGroupSize} setRequiredMembers={this.setRequiredMembers} groupSize={this.state.groupSize} requiredMembers={this.state.requiredMembers}/>
      } instructions={<SaveText />} advanceSection={this.advanceSection} />
    );
  }
}

SaveActivityStage2.propTypes = {
  onNextSection: PropTypes.func.isRequired,
}

export default SaveActivityStage2; 
