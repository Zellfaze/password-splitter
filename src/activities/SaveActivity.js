import React, { Component } from 'react';
import SaveActivityStage1 from './SaveActivity/SaveActivityStage1.js';
import SaveActivityStage2 from './SaveActivity/SaveActivityStage2.js';
import SaveActivityStage3 from './SaveActivity/SaveActivityStage3.js';
import SaveActivityStage4 from './SaveActivity/SaveActivityStage4.js';
import CryptoFunctions from '../crypto.js';


const stages = {
  PLAINTEXT: 0,
  XOFN: 1,
  CREDENTIALS: 2,
  CIPHERTEXT: 3
};

class SaveActivity extends Component {
  constructor(props) {
    super(props);
    let emptyShareObject = {
      username: "",
      password: "",
    };
    
    this.state = {
      stagenumber: 0,
      groupSize: 2,
      requiredMembers: 2,
      cipherText: "",
      credentials: [],
      shareList: []
    };
    
    this.plaintext = "";
    
    this.state.credentials.push(Object.assign({}, emptyShareObject));
    this.state.credentials.push(Object.assign({}, emptyShareObject));
    
    this.generateCipherText = this.generateCipherText.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
    this.advanceSection1 = this.advanceSection1.bind(this);
    this.advanceSection2 = this.advanceSection2.bind(this);
    this.advanceSection3 = this.advanceSection3.bind(this);
  }
  
  //TODO: Have this show a proper error instead of just logging the console
  generateCipherText(plaintext, groupSize, requiredMembers, credentials) {
    CryptoFunctions.generateBlob(plaintext, groupSize, requiredMembers, credentials).then( (blob) => {
      this.setState({
        stagenumber: this.state.stagenumber+1,
        cipherText: blob
      });
    }).catch( (err) => {
      console.log(err);
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
    this.setState({
      credentials: credentialsArray
    });
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

export default SaveActivity;
 
 
