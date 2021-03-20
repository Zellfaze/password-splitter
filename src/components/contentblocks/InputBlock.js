import React, { Component, Fragment } from 'react';
import ContentBlock from '../ContentBlock.js';
import TextAreaInput from '../widgets/TextAreaInput.js';

class InputBlock extends Component {
  constructor(props) {
    super(props);
    
    this.state = {formID: Math.floor(Math.random() * Math.floor(100))};
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
          <TextAreaInput id={htmlID} rows={rows} value={text} onChange={this.props.setText} />
        </Fragment>
      } />
    );
  }
}

InputBlock.defaultProps = {
  rows: 3,
}

export default InputBlock;
