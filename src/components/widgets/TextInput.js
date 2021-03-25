// React imports
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';

class TextInput extends Component {
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
      value
    } = this.props

    return (<Form.Control type="text" data-testid="textinput-input" id={id} value={value} onChange={this.onChange}/>);
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
