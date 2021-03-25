// React imports
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';

class PasswordInput extends Component {
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

    return (<Form.Control type="password" data-testid="password-input" id={id} value={value} onChange={this.onChange}/>);
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default PasswordInput;
