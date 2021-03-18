import React, { Component, Fragment } from 'react'; 
import ContentBlock from './ContentBlock.js';

class KeyInputBlock extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyID: ""
    }
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  
  render() {
    return (
      <ContentBlock title="ID Number" body={
        <Fragment>
          <label htmlFor="KeyInputBlock" className="form-label">ID Number</label>
          <input id="KeyInputBlock" className="form-control" type="text" value={this.props.keyID} onChange={this.onChange}/>
        </Fragment>
      } />
    );
  }
}

export default KeyInputBlock;
