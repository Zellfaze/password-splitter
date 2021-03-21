import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from '../ContentBlock.js';

export default function NextButton({onClick}) {
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="nextbutton-title"
          defaultMessage="Next Section"
          description="Title shown for block with button to advance to next section of the activity"
        />
      }
    >
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={onClick}>
          <FormattedMessage
            id="nextbutton-button"
            defaultMessage="Next"
            description="Text shown on the next section button"
          />
        </button>
      </div>
    </ContentBlock>
  );
}
