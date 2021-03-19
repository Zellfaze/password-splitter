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
    const {
      title,
      instructionsText,
      label,
      rows,
      text
    } = this.props;
    
    let htmlID = `inputBlock-${this.state.formID}`;
    
    return (
      <ContentBlock title={title} body={
        <Fragment>
          <p className="card-text">{instructionsText}</p>
          <label htmlFor={htmlID} className="form-label">{label}</label>
          <textarea className="form-control" id={htmlID} rows={rows}  value={text} onChange={this.onFormChange} />
        </Fragment>
      } />
    );
  }
}

InputBlock.defaultProps = {
  rows: 3,
}

export default InputBlock;
