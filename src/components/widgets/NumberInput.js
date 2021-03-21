import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    
    if ((this.props.maxValue !== null) && (this.props.minValue !== null) && (this.props.maxValue < this.props.minValue)) {
      throw new Error("Max value can not be less than min value!");
    }
  }
  
  onChange(event) {
    this.props.onChange(newValue);
  }
  
  render() {
    const {
      id,
      value
    } = this.props

    return (<input id={id} className="form-control" max={this.props.maxValue} min={this.props.minValue} type="number" value={value} onChange={this.onChange}/>);
  }
}

NumberInput.defaultProps = {
  maxValue: null,
  minValue: null
}

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  minValue: PropTypes.number
};

export default NumberInput;
