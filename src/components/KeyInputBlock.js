import React, { Component, Fragment } from 'react'; 
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

class KeyInputBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  
  render() {
    const {
      keyID
    } = this.props

    return (
      <ContentBlock
        title={
          <FormattedMessage
            id="keyinputblock-title"
            defaultMessage="ID Number"
            description="Title shown for block that prompts user for the blob ID"
          />
        }
        body={
          <Fragment>
            <label htmlFor="KeyInputBlock" className="form-label">
              <FormattedMessage
                id="keyinputblock-label"
                defaultMessage="ID Number"
                description="Label shown directly above blob ID number input field"
              />
            </label>
            <input id="KeyInputBlock" className="form-control" type="text" value={keyID} onChange={this.onChange}/>
          </Fragment>
        }
      />
    );
  }
}

export default KeyInputBlock;
