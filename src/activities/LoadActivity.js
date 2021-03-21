import React, { Component } from 'react';
import LoadActivityStage1 from './LoadActivity/LoadActivityStage1.js';
import LoadActivityStage2 from './LoadActivity/LoadActivityStage2.js';
import LoadActivityStage3 from './LoadActivity/LoadActivityStage3.js';
import CryptoFunctions from '../lib/crypto.js';
import PropTypes from 'prop-types';

const stages = {
  CIPHERTEXT: 0,
  CREDENTIALS: 1,
  PLAINTEXT: 2
};

class LoadActivity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stagenumber: 0,
      cipherText: "",
      plainText: "",
      foundUsers: [],
      requiredMembers: 0
    };
    
    this.advanceSection1 = this.advanceSection1.bind(this);
    this.advanceSection2 = this.advanceSection2.bind(this);
  }
  
  advanceSection1(blob) {
    // Extract the user list from the blob
    CryptoFunctions.extractMetadataFromBlob(blob).then( (metadata) => {
      this.setState({
        cipherText: blob,
        foundUsers: metadata.users,
        requiredMembers: metadata.requiredMembers,
        stagenumber: this.state.stagenumber+1
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  advanceSection2(credentials) {
    CryptoFunctions.decryptBlob(this.state.cipherText, credentials).then( (results) => {
      this.setState({
        plainText: results,
        stagenumber: this.state.stagenumber+1
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  render() {
    switch(this.state.stagenumber) {
      default:
      case stages.CIPHERTEXT:
        return (
          <LoadActivityStage1 onNextSection={this.advanceSection1} addMessage={this.props.addMessage} id={this.props.id} />
        );
      case stages.CREDENTIALS:
        return (
          <LoadActivityStage2 onNextSection={this.advanceSection2} groupSize={this.state.requiredMembers} users={this.state.foundUsers} />
        );
      case stages.PLAINTEXT:
        return (
          <LoadActivityStage3 text={this.state.plainText} />
        );
    }
  }
}

LoadActivity.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default LoadActivity;
