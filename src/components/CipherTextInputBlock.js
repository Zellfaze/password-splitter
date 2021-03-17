import React, { Component } from 'react';
import InputBlock from './InputBlock.js';

class CipherTextInputBlock extends Component {
  render() {
    return (
      <InputBlock title="Ciphertext" setText={this.props.setText} label="Ciphertext"  text={this.props.text} />
    );
  }
}

export default CipherTextInputBlock;
