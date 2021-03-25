// React imports
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  
  render() {
    const {
      id,
      value,
      rows
    } = this.props
    
    return (<Form.Control as="textarea" data-testid="textarea-input" id={id} rows={rows}  value={value} onChange={this.onChange} />);
  }
}

TextAreaInput.defaultProps = {
  row: 3
}

TextAreaInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  row: PropTypes.number
};

export default TextAreaInput;
