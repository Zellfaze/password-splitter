import React, { Component } from 'react';
import SaveText from './SaveText.js';
import PlainTextBlock from '../../components/PlainTextBlock.js';
import NextButton from '../../components/NextButton.js';

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
      <div className="container-fluid mt-2">
        <SaveText />
        <PlainTextBlock setPlaintext={this.setPlaintext} plainText={this.state.plainText}/>
        <NextButton onClick={this.advanceSection}/>
      </div>
    );
  }
}

export default SaveActivityStage1;
