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
    const {
      groupSize,
      requiredMembers
    } = this.props;
    
    return (
      <ContentBlock
        title={
          <FormattedMessage
            id="xofnblock-title"
            defaultMessage="Group Size"
            description="Title shown for block where the size of the group and number of required members is provided"
          />
        }
        body={
          <Fragment>
            <p className="card-text">
              <FormattedMessage
                id="xofnblock-instructions"
                defaultMessage="In this section set the group size and other parameters."
                description="Instructions shown above where the size of the group and number of required members is input"
              />
            </p>
            <div className="mb-2">
              <label htmlFor="groupSize" className="form-label">
                <FormattedMessage
                  id="xofnblock-label-groupsize"
                  defaultMessage="Group Size"
                  description="Label shown next to group size field"
                />
              </label>
              <input type="number" className="form-control" id="groupSize" value={groupSize} onChange={this.onGroupSizeChange} />
            </div>
            <div className="mb-2">
              <label htmlFor="requiredMembers" className="form-label">
                <FormattedMessage
                  id="xofnblock-label-requiredmembers"
                  defaultMessage="Required Members"
                  description="Label shown next to group size field"
                />
              </label>
              <input type="number" className="form-control" id="requiredMembers" value={requiredMembers} onChange={this.onRequiredMembersChange} />
            </div>
          </Fragment>
        }
      />
    );
  }
}

export default XofNBlock;
