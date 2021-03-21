import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    return (<input id={id} className="form-control" type="text" value={value} onChange={this.onChange}/>);
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
