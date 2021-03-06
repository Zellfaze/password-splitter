// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

// Component imports
import ActivityStage from '../../components/ActivityStage.js';
import InputBlock from '../../components/contentblocks/InputBlock.js';
import SaveText from './SaveText.js';

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
      <ActivityStage advanceSection={this.advanceSection}>
        <InputBlock
          title={
            <FormattedMessage
              id="saveactivity-input-title"
              defaultMessage="Text to encrypt"
              description="Title shown for block that user enters plaintext into"
            />
          }
          instructionsText={
            <FormattedMessage
              id="saveactivity-input-instructions"
              defaultMessage="Please enter the text that you'd like to encrypt below"
              description="Instructions shown above the input field that user enters plaintext into"
            />
          }
          setText={this.setPlaintext}
          label={
            <FormattedMessage
              id="saveactivity-input-label"
              defaultMessage="Text to encrypt"
              description="Label shown for the input field that user enters plaintext into"
            />
          }
          text={this.state.plainText}
        />
      </ActivityStage>
    );
  }
}

SaveActivityStage1.propTypes = {
  onNextSection: PropTypes.func.isRequired,
}

export default SaveActivityStage1;
