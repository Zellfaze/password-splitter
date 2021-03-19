import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

class SaveText extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <p>
            <FormattedMessage
              id="saveactivity-instructions"
              defaultMessage="Please fill out the following and then press Next."
              description="Save activity instructions for the top of the screen"
            />
          </p>
        </div>
      </div>
    );
  }
} 

export default SaveText;
