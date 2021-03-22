import React, { Component } from 'react';
import SaveActivityStage1 from './SaveActivity/SaveActivityStage1.js';
import SaveActivityStage2 from './SaveActivity/SaveActivityStage2.js';
import SaveActivityStage3 from './SaveActivity/SaveActivityStage3.js';
import SaveActivityStage4 from './SaveActivity/SaveActivityStage4.js';
import CryptoFunctions from '../lib/crypto.js';
import api from '../lib/api.js';
import PropTypes from 'prop-types';


const stages = {
  PLAINTEXT: 0,
  XOFN: 1,
  CREDENTIALS: 2,
  CIPHERTEXT: 3
};

class SaveActivity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stagenumber: 0,
      groupSize: 2,
      requiredMembers: 2,
      cipherText: "",
      shareList: []
    };
    
    this.plaintext = "";
    
    this.generateCipherText = this.generateCipherText.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
    this.advanceSection1 = this.advanceSection1.bind(this);
    this.advanceSection2 = this.advanceSection2.bind(this);
    this.advanceSection3 = this.advanceSection3.bind(this);
  }
  
  generateCipherText(plaintext, groupSize, requiredMembers, credentials) {
    // Generate the blob
    CryptoFunctions.generateBlob(plaintext, groupSize, requiredMembers, credentials).then( (blob) => {
      // Attempt to save the blob
      this.props.addMessage("Saving...", "info");
      return api.saveBlob(blob);
    }).then( (response) => {
      // Everything went fine, let's show them the ID
      this.props.addMessage("Saved.", "info");
      this.setState({
        stagenumber: this.state.stagenumber+1,
        cipherText: response.id
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  advanceSection() {
    this.setState({stagenumber: this.state.stagenumber+1});
  }
  
  advanceSection1(plaintext) {
    this.plaintext = plaintext;
    this.setState({
      stagenumber: this.state.stagenumber+1,
    });
  }
  
  advanceSection2(groupSize, requiredMembers) {
    this.setState({
      stagenumber: this.state.stagenumber+1,
      groupSize: groupSize,
      requiredMembers: requiredMembers
    });
  }
  
  advanceSection3(credentialsArray) {
    // Make sure every credential object is defined
    const allDefined = credentialsArray.map( (credentials) => {
      // Test each credential
      if ((credentials.username === "") || (credentials.password === "")) {
        return false;
      }
      return true;
    }).reduce( (finalIsValid, currentIsValid) => {
      // Reduce array down to single bool
      return finalIsValid && currentIsValid;
    });
    
    if (!allDefined) {
      return this.props.addMessage("All username/password boxes must be filled!", "danger");
    }
    this.generateCipherText(this.plaintext, this.state.groupSize, this.state.requiredMembers, credentialsArray);
  }
  
  render() {
    switch(this.state.stagenumber) {
      default:
      case stages.PLAINTEXT:
        return (
          <SaveActivityStage1 onNextSection={this.advanceSection1} />
        );
      case stages.XOFN:
        return (
          <SaveActivityStage2 onNextSection={this.advanceSection2} />
        );
      case stages.CREDENTIALS:
        return (
          <SaveActivityStage3 onNextSection={this.advanceSection3} groupSize={this.state.groupSize} />
        );
      case stages.CIPHERTEXT:
        return (
          <SaveActivityStage4 cipherText={this.state.cipherText} />
        );
    }
  }
}

SaveActivity.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default SaveActivity;
