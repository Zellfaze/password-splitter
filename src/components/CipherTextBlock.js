import React, { Component, Fragment } from 'react';
import ContentBlock from './ContentBlock.js';

class CipherTextBlock extends Component {
  render() {
    return (
      <ContentBlock title="Ciphertext" body={
        <Fragment>
          <p className="card-text">Instructions</p>
          <label htmlFor="cipherTextBlock" className="form-label">Ciphertext</label>
          <textarea className="form-control" id="cipherTextBlock" rows="3"  value={this.props.cipherText} disabled={true}/>
        </Fragment>
      } />
    );
  }
} 

export default CipherTextBlock;
