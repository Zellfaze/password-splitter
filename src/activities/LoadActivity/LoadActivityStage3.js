import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import LoadText from './LoadText.js';
import CipherTextBlock from '../../components/contentblocks/CipherTextBlock.js';
import PropTypes from 'prop-types';

class LoadActivityStage3 extends Component {
  render() {
    return (
      <ActivityStage components={
        <CipherTextBlock cipherText={this.props.text} />
      } instructions={<LoadText />} />
    );
  }
}

LoadActivityStage3.propTypes = {
  text: PropTypes.string.isRequired
}

export default LoadActivityStage3; 
 
