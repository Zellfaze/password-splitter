// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

// Component imports
import ActivityStage from '../../components/ActivityStage.js';
import ContentBlock from '../../components/ContentBlock.js';
import SaveText from './SaveText.js';

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
        >
          <p>
            <FormattedMessage
              id="saveactivity-success-instructions"
              defaultMessage="Please save the following link for your records:"
              description="Instructions shown right before the final link"
            />
            <a data-testid="final-link" href={link}>{link}</a>
          </p>
        </ContentBlock>
      } instructions="" />
    );
  }
}

SaveActivityStage4.propTypes = {
  cipherText: PropTypes.string.isRequired,
}

export default SaveActivityStage4; 
