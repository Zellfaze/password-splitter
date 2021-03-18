import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import PlainTextBlock from '../../components/PlainTextBlock.js';

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
        <PlainTextBlock setPlaintext={this.setPlaintext} plainText={this.state.plainText}/>
      } instructions={<SaveText />} advanceSection={this.advanceSection} />
    );
  }
}

export default SaveActivityStage1;
