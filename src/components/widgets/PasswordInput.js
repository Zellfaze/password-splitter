import React, { Component } from 'react'; 

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

    return (<input id={id} className="form-control" type="password" value={value} onChange={this.onChange}/>);
  }
}

export default PasswordInput;
