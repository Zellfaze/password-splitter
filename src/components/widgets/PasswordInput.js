import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

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

    return (<input data-testid="password-input" id={id} className="form-control" type="password" value={value} onChange={this.onChange}/>);
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default PasswordInput;
