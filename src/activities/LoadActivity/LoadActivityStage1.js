import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import LoadText from './LoadText.js';
import CipherTextInputBlock from '../../components/CipherTextInputBlock.js';

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
      <ActivityStage components={
        <CipherTextInputBlock setText={this.setCiphertext} text={this.state.cipherText}/>
      } instructions={<LoadText />} advanceSection={this.advanceSection} />
    );
  }
}

export default LoadActivityStage1;
 
