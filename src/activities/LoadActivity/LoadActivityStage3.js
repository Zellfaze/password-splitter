import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import LoadText from './LoadText.js';
import CipherTextBlock from '../../components/contentblocks/CipherTextBlock.js';

class LoadActivityStage3 extends Component {
  render() {
    return (
      <ActivityStage components={
        <CipherTextBlock cipherText={this.props.text} />
      } instructions={<LoadText />} />
    );
  }
}

export default LoadActivityStage3; 
 
