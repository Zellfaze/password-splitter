import React, { Component } from 'react';
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import ContentBlock from '../../components/ContentBlock.js';

class SaveActivityStage4 extends Component {
  render() {
    let link = `${window.location.protocol}//${window.location.host}?id=${this.props.cipherText}`;
    
    return (
      <ActivityStage components={
        <ContentBlock title="Success!" body={
          <p>Please save the following link for your records: <a href={link}>{link}</a></p>
        } />
      } instructions={<SaveText />} />
    );
  }
}

export default SaveActivityStage4; 
