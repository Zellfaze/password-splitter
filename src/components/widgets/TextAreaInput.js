import React, { Component } from 'react'; 

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
    
    return (<textarea className="form-control" id={id} rows={rows}  value={value} onChange={this.onChange} />);
  }
}

export default TextAreaInput;
