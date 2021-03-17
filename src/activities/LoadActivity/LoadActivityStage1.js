import React, { Component } from 'react';
import LoadText from './LoadText.js';
import CipherTextInputBlock from '../../components/CipherTextInputBlock.js';
import NextButton from '../../components/NextButton.js';

class LoadActivityStage1 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cipherText: ""
    };
    
    this.setCiphertext = this.setCiphertext.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
  }
  
  advanceSection() {
    if (this.state.cipherText.length > 0) {
      this.props.onNextSection(this.state.cipherText);
    }
  }
  
  setCiphertext(newText) {
    this.setState({cipherText: newText});
  }
  
  render() {
    return (
      <div className="container-fluid mt-2">
        <LoadText />
        <CipherTextInputBlock setText={this.setCiphertext} text={this.state.cipherText}/>
        <NextButton onClick={this.advanceSection}/>
      </div>
    );
  }
}

export default LoadActivityStage1;
 
