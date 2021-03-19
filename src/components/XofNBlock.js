import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

class XofNBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onGroupSizeChange = this.onGroupSizeChange.bind(this);
    this.onRequiredMembersChange = this.onRequiredMembersChange.bind(this);
  }
  
  onGroupSizeChange(event) {
    if ((event.target.value >= 2) && (event.target.value <= 255) && (event.target.value >= this.props.requiredMembers)) {
      this.props.setGroupSize(event.target.value);
    }
  }
  
  onRequiredMembersChange(event) {
    if ((event.target.value >= 2) && (event.target.value <= 255) && (event.target.value <= this.props.groupSize)) {
      this.props.setRequiredMembers(event.target.value);
    }
  }
  
  render() {
    return (
      <ContentBlock title="Group Size" body={
        <Fragment>
          <p className="card-text">In this section set the group size and other parameters.</p>
          <div className="mb-2">
            <label htmlFor="groupSize" className="form-label">Group Size</label>
            <input type="number" className="form-control" id="groupSize" value={this.props.groupSize} onChange={this.onGroupSizeChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="requiredMembers" className="form-label">Required Members</label>
            <input type="number" className="form-control" id="requiredMembers" value={this.props.requiredMembers} onChange={this.onRequiredMembersChange} />
          </div>
        </Fragment>
      } />
    );
  }
}

export default XofNBlock;
