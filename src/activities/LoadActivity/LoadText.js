import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

function LoadText() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-auto">
        <p>
          <FormattedMessage
            id="loadactivity-instructions"
            defaultMessage="Please fill out the following and then press Next."
            description="Load activity instructions for the top of the screen"
          />
        </p>
      </div>
    </div>
  );
} 

export default LoadText;
