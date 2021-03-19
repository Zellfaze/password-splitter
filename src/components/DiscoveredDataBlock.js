import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

const DiscoveredDataBlock = ({users}) => {
  const items = users.map( (currentUser) => {
    return (<li key={currentUser}>{currentUser}</li>);
  });
  
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="discovereddatablock-title"
          defaultMessage="Found Users"
          description="Title shown for block containing list of all users found in an encrypted blob"
        />
      }
      body={
        <Fragment>
          <p className="card-text">
          <FormattedMessage
            id="discovereddatablock-list"
            defaultMessage="Found Users:"
            description="Text shown directly above list of users found in encrypted blob"
          />
          </p>
          <ul>
            {items}
          </ul>
        </Fragment>
      }
    />
  );
};

DiscoveredDataBlock.defaultProps = {
  users: []
}

export default DiscoveredDataBlock;
