// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import ActivityStage from '../../components/ActivityStage.js';
import KeyInputBlock from '../../components/contentblocks/KeyInputBlock.js';
import LoadText from './LoadText.js';

// Other imports
import CryptoFunctions from '../../lib/crypto.js';
import api from '../../lib/api.js';

class LoadActivityStage1 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: String(this.props.id)
    };
    
    this.setID = this.setID.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
    
    // If we were given an ID, let's go ahead and try it
    if (this.props.id !== "") {
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
    api.loadBlob(this.state.id).then( (blob) => {
      // Advance to the next section
      this.props.onNextSection(blob.data);
    }).catch( (err) => {
      
      this.props.addMessage(err, "danger");
    });
  }
  
  setID(newText) {
    this.setState({id: newText});
  }
  
  render() {
    return (
      <ActivityStage advanceSection={this.advanceSection} >
        <KeyInputBlock onChange={this.setID} keyID={this.state.id} />
      </ActivityStage>
    );
  }
}

LoadActivityStage1.propTypes = {
  id: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  onNextSection: PropTypes.func.isRequired
}

export default LoadActivityStage1;
 
