import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from '../ContentBlock.js';
import NumberInput from '../widgets/NumberInput.js';
import InputLabel from '../widgets/InputLabel.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';

export default function XofNBlock({groupSize, requiredMembers, setGroupSize, setRequiredMembers}) {
  return (
    <ContentBlock
      title={
        <FormattedMessage
          id="xofnblock-title"
          defaultMessage="Group Size"
          description="Title shown for block where the size of the group and number of required members is provided"
        />
      }
    >
      <ContentBlockInstructions>
        <FormattedMessage
          id="xofnblock-instructions"
          defaultMessage="In this section set the group size and other parameters."
          description="Instructions shown above where the size of the group and number of required members is input"
        />
      </ContentBlockInstructions>
      <div className="mb-2">
        <InputLabel id="groupSize">
          <FormattedMessage
            id="xofnblock-label-groupsize"
            defaultMessage="Group Size"
            description="Label shown next to group size field"
          />
        </InputLabel>
        <NumberInput id="groupSize" value={groupSize} onChange={setGroupSize} maxValue={255} minValue={requiredMembers} />
      </div>
      <div className="mb-2">
        <InputLabel id="requiredMembers">
          <FormattedMessage
            id="xofnblock-label-requiredmembers"
            defaultMessage="Required Members"
            description="Label shown next to group size field"
          />
        </InputLabel>
        <NumberInput id="requiredMembers" value={requiredMembers} onChange={setRequiredMembers} maxValue={groupSize} minValue={2} />
      </div>
    </ContentBlock>
  );
}
