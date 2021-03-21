import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from '../ContentBlock.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';

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
          <ContentBlockInstructions>
            <FormattedMessage
              id="discovereddatablock-list"
              defaultMessage="Found Users:"
              description="Text shown directly above list of users found in encrypted blob"
            />
          </ContentBlockInstructions>
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
