import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import CipherTextBlock from '../../components/CipherTextBlock.js';

class SaveActivityStage4 extends Component {
  render() {
    return (
      <ActivityStage components={
        <CipherTextBlock cipherText={this.props.cipherText} />
      } instructions={<SaveText />} />
    );
  }
}

export default SaveActivityStage4; 
