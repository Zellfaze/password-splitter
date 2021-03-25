// React imports
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Component imports
import ContentBlock from '../ContentBlock.js';
import TextAreaInput from '../widgets/TextAreaInput.js';
import InputLabel from '../widgets/InputLabel.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';

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
      text,
      setText
    } = this.props;
    
    let htmlID = `inputBlock-${this.state.formID}`;
    
    return (
      <ContentBlock title={title} >
        <ContentBlockInstructions>{instructionsText}</ContentBlockInstructions>
        <InputLabel id={htmlID}>{label}</InputLabel>
        <TextAreaInput id={htmlID} rows={rows} value={text} onChange={setText} />
      </ContentBlock>
    );
  }
}

InputBlock.defaultProps = {
  rows: 3,
}

InputBlock.propTypes = {
  title: PropTypes.node.isRequired,
  instructionsText: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  rows: PropTypes.number,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired
}

export default InputBlock;
