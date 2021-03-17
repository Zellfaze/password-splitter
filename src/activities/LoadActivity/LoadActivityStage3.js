import React, { Component } from 'react';
import LoadText from './LoadText.js';
import CipherTextBlock from '../../components/CipherTextBlock.js';

class LoadActivityStage3 extends Component {
  render() {
    return (
      <div className="container-fluid mt-2">
        <LoadText />
        <CipherTextBlock cipherText={this.props.text} />
      </div>
    );
  }
}

export default LoadActivityStage3; 
 
