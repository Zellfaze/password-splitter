import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from '../ContentBlock.js';
import InputLabel from '../widgets/InputLabel.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';
import PropTypes from 'prop-types';

function CipherTextBlock({cipherText}) {
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="ciphertextblock-title"
          defaultMessage="Ciphertext"
          description="Title for block containing outputted encrypted blob"
        />
      }
    >
      <ContentBlockInstructions>
        <FormattedMessage
          id="ciphertextblock-instructions"
          defaultMessage="Below is the encrypted blob. Please save for your reference."
          description="Instructions show next to outputted encrypted blob"
        />
      </ContentBlockInstructions>
      <InputLabel id="cipherTextBlock">
        <FormattedMessage
          id="ciphertextblock-label"
          defaultMessage="Ciphertext"
          description="Label shown directly above outputted encrypted blob"
        />
      </InputLabel>
      <textarea className="form-control" id="cipherTextBlock" rows="3"  value={cipherText} disabled={true}/>
    </ContentBlock>
  );
}

CipherTextBlock.propTypes = {
  cipherText: PropTypes.string.isRequired
};

export default CipherTextBlock;
