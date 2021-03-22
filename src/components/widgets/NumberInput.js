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
    const {
      minValue,
      maxValue
    } = this.props
    const newValue = Number(event.target.value);
    
    // Make sure the new value is in range
    if ((maxValue !== null) && (maxValue < newValue)) { return; }
    if ((minValue !== null) && (minValue > newValue)) { return; }
    
    this.props.onChange(Number(event.target.value));
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
