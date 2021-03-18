import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import InputBlock from '../../components/InputBlock.js';

class SaveActivityStage1 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      plainText: ""
    };
    
    this.setPlaintext = this.setPlaintext.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
  }
  
  advanceSection() {
    if (this.state.plainText.length > 0) {
      this.props.onNextSection(this.state.plainText);
    }
  }
  
  setPlaintext(newText) {
    this.setState({plainText: newText});
  }
  
  render() {
    return (
      <ActivityStage components={
        <InputBlock title="Plaintext" setText={this.setPlaintext} label="Plaintext"  text={this.state.plainText} />
      } instructions={<SaveText />} advanceSection={this.advanceSection} />
    );
  }
}

export default SaveActivityStage1;
