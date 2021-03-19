import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

class NextButton extends Component {
  render() {
    return (
      <ContentBlock
        title={
          <FormattedMessage
            id="nextbutton-title"
            defaultMessage="Next Section"
            description="Title shown for block with button to advance to next section of the activity"
          />
        }
        body={
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={this.props.onClick}>
              <FormattedMessage
                id="nextbutton-button"
                defaultMessage="Next"
                description="Text shown on the next section button"
              />
            </button>
          </div>
        }
      />
    );
  }
}

export default NextButton;
