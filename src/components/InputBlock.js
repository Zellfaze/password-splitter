import React, { Component, Fragment } from 'react';
import ContentBlock from './ContentBlock.js';

class InputBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {formID: Math.floor(Math.random() * Math.floor(100))};
  }
  
  onFormChange(event) {
    this.props.setText(event.target.value);
  }
  
  render() {
    let htmlID = `inputBlock-${this.state.formID}`;
    
    return (
      <ContentBlock title={this.props.title} body={
        <Fragment>
          <p className="card-text">{this.props.instructionsText}</p>
          <label htmlFor={htmlID} className="form-label">{this.props.label}</label>
          <textarea className="form-control" id={htmlID} rows={this.props.rows}  value={this.props.text} onChange={this.onFormChange} />
        </Fragment>
      } />
    );
  }
}

InputBlock.defaultProps = {
  rows: 3,
  instructionsText: "Instructions",
  label: "Input Text",
  title: "Input Block"
}

export default InputBlock;
