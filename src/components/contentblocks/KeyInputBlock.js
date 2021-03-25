// React imports
import React, { Component, Fragment } from 'react'; 
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Component imports
import ContentBlock from '../ContentBlock.js';
import TextInput from '../widgets/TextInput.js';
import InputLabel from '../widgets/InputLabel.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';

function KeyInputBlock({keyID, onChange}) {  
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="keyinputblock-title"
          defaultMessage="ID Number"
          description="Title shown for block that prompts user for the blob ID"
        />
      }
    >
      <ContentBlockInstructions>
        <FormattedMessage
          id="keyinputblock-instructions"
          defaultMessage="Enter the ID number of your saved blob below."
          description="Instructions shown to user on asking them to input the ID of their blob"
        />
      </ContentBlockInstructions>
      <InputLabel id="KeyInputBlock">
        <FormattedMessage
          id="keyinputblock-label"
          defaultMessage="ID Number"
          description="Label shown directly above blob ID number input field"
        />
      </InputLabel>
      <TextInput id="KeyInputBlock" value={keyID} onChange={onChange}/>
    </ContentBlock>
  );
}

KeyInputBlock.propTypes = {
  keyID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default KeyInputBlock;
