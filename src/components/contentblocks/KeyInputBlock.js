import React, { Component, Fragment } from 'react'; 
import {FormattedMessage} from 'react-intl';
import ContentBlock from '../ContentBlock.js';
import TextInput from '../widgets/TextInput.js';
import InputLabel from '../widgets/InputLabel.js';

export default function KeyInputBlock({keyID, onChange}) {  
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="keyinputblock-title"
          defaultMessage="ID Number"
          description="Title shown for block that prompts user for the blob ID"
        />
      }
      body={
        <Fragment>
          <InputLabel id="KeyInputBlock">
            <FormattedMessage
              id="keyinputblock-label"
              defaultMessage="ID Number"
              description="Label shown directly above blob ID number input field"
            />
          </InputLabel>
          <TextInput id="KeyInputBlock" value={keyID} onChange={onChange}/>
        </Fragment>
      }
    />
  );
}
