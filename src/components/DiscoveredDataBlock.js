import React, { Component, Fragment } from 'react';
import ContentBlock from './ContentBlock.js';

class DiscoveredDataBlock extends Component {
  render() {
    const items = this.props.users.map( (currentUser) => {
      return (<li key={currentUser}>{currentUser}</li>);
    });
    return (
      <ContentBlock title={this.props.title} body={
        <Fragment>
          <p className="card-text">{this.props.instructionsText}</p>
          <ul>
            {items}
          </ul>
        </Fragment>
      } />
    );
  }
}

DiscoveredDataBlock.defaultProps = {
  instructionsText: "The following users were found:",
  title: "Found Users",
  users: []
}

export default DiscoveredDataBlock;
