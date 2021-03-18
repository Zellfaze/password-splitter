import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import LoadText from './LoadText.js';
import KeyInputBlock from '../../components/KeyInputBlock.js';
import Jquery from 'jquery';
import CryptoFunctions from '../../crypto.js';

class LoadActivityStage1 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: String(this.props.id)
    };
    
    this.setID = this.setID.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
    
    // If we were given an ID, let's go ahead and try it
    if (this.props.id !== null) {
      this.advanceSection();
    }
  }
  
  advanceSection() {
    // Make sure that they gave us an ID
    if (this.state.id.length === 0) {
      this.props.addMessage("You must specify an ID!", "danger");
      return;
    }
    
    // Try to fetch the blob from the server
    Jquery.get(`/api/get/${this.state.id}`).then( (data) => {
      // Validate that this blob is good
      if ((data.status !== 200) || (!CryptoFunctions.validateBlob(data.data.blob))) { this.props.addMessage("Invalid ID!", "danger"); return; }
      
      // Advance to the next section
      this.props.onNextSection(data.data.blob);
    });
  }
  
  setID(newText) {
    this.setState({id: newText});
  }
  
  render() {
    return (
      <ActivityStage components={
        <KeyInputBlock onChange={this.setID} keyID={this.state.id} />
      } instructions={<LoadText />} advanceSection={this.advanceSection} />
    );
  }
}

export default LoadActivityStage1;
 
