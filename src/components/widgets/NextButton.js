// React imports
import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Button from 'react-bootstrap/Button';

// Component imports
import ContentBlock from '../ContentBlock.js';

function NextButton({onClick}) {
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
        <Button variant="primary" block size="lg" onClick={onClick}>
          <FormattedMessage
            id="nextbutton-button"
            defaultMessage="Next"
            description="Text shown on the next section button"
          />
        </Button>
      </div>
    </ContentBlock>
  );
}

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NextButton;
