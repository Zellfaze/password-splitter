import React, { Component } from 'react';
import SaveText from './SaveText.js';
import CipherTextBlock from '../../components/CipherTextBlock.js';

class SaveActivityStage4 extends Component {
  render() {
    return (
      <div className="container-fluid mt-2">
        <SaveText />
        <CipherTextBlock cipherText={this.props.cipherText} />
      </div>
    );
  }
}

export default SaveActivityStage4; 
