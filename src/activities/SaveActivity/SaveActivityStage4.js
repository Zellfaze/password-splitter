import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import ActivityStage from '../../components/ActivityStage.js';
import SaveText from './SaveText.js';
import ContentBlock from '../../components/ContentBlock.js';

class SaveActivityStage4 extends Component {
  render() {
    let link = `${window.location.protocol}//${window.location.host}?id=${this.props.cipherText}`;
    
    return (
      <ActivityStage components={
        <ContentBlock
          title={
            <FormattedMessage
              id="saveactivity-success-title"
              defaultMessage="Success!"
              description="Title for block that is shown after user's encrypted blob is saved to server"
            />
          }
          body={
            <p>
              <FormattedMessage
                id="saveactivity-success-instructions"
                defaultMessage="Please save the following link for your records:"
                description="Instructions shown right before the final link"
              />
              <a href={link}>{link}</a>
            </p>
          }
        />
      } instructions="" />
    );
  }
}

export default SaveActivityStage4; 
