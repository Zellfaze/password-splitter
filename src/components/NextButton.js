import React, { Component } from 'react';
import ContentBlock from './ContentBlock.js';

class NextButton extends Component {
  render() {
    return (
      <ContentBlock title="Next Section" body={
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={this.props.onClick}>Next</button>
        </div>
      } />
    );
  }
}

export default NextButton;
