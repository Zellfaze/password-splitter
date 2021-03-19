import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

class CipherTextBlock extends Component {
  render() {
    return (
      <ContentBlock
        title={
          <FormattedMessage
            id="ciphertextblock-title"
            defaultMessage="Ciphertext"
            description="Title for block containing outputted encrypted blob"
          />
        }
        body={
          <Fragment>
            <p className="card-text">
              <FormattedMessage
                id="ciphertextblock-instructions"
                defaultMessage="Below is the encrypted blob. Please save for your reference."
                description="Instructions show next to outputted encrypted blob"
              />
            </p>
            <label htmlFor="cipherTextBlock" className="form-label">
              <FormattedMessage
                id="ciphertextblock-label"
                defaultMessage="Ciphertext"
                description="Label shown directly above outputted encrypted blob"
              />
            </label>
            <textarea className="form-control" id="cipherTextBlock" rows="3"  value={this.props.cipherText} disabled={true}/>
          </Fragment>
        }
      />
    );
  }
} 

export default CipherTextBlock;
