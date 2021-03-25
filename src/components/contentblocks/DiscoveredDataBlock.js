// React imports
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

// Bootstrap imports
import ListGroup from 'react-bootstrap/ListGroup';

// Component imports
import ContentBlock from '../ContentBlock.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';

const DiscoveredDataBlock = ({users}) => {
  const items = users.map( (currentUser) => {
    return (<ListGroup.Item role="listitem" key={currentUser}>{currentUser}</ListGroup.Item>);
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
    >
      <ContentBlockInstructions>
        <FormattedMessage
          id="discovereddatablock-list"
          defaultMessage="Found Users:"
          description="Text shown directly above list of users found in encrypted blob"
        />
      </ContentBlockInstructions>
      <ListGroup role="list">
        {items}
      </ListGroup>
    </ContentBlock>
  );
};

DiscoveredDataBlock.propTypes = {
  users: PropTypes.array.isRequired
}

export default DiscoveredDataBlock;
