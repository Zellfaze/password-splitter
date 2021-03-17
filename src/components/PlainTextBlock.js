import React, { Component } from 'react';
import InputBlock from './InputBlock.js';

class PlainTextBlock extends Component {
  render() {
    return (
      <InputBlock title="Plaintext" setText={this.props.setPlaintext} text={this.props.plainText} label="Plaintext" />
    );
  }
}

export default PlainTextBlock;
