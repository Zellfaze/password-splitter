// React imports
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

// Component imports
import ContentBlock from '../ContentBlock.js';
import TextInput from '../widgets/TextInput.js';
import PasswordInput from '../widgets/PasswordInput.js';
import InputLabel from '../widgets/InputLabel.js';
import ContentBlockInstructions from '../widgets/ContentBlockInstructions.js';


class UserCredentialBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  
  onUsernameChange(newValue) {
    this.props.setUserCredentials(this.props.id, newValue, this.props.password);
  }
  
  onPasswordChange(newValue) {
    this.props.setUserCredentials(this.props.id, this.props.username, newValue);
  }
  
  render() {
    const {
      id,
      username,
      password
    } = this.props;
    
    return (
      <ContentBlock
        title={
          <FormattedMessage
            id="usercredentialblock-title"
            defaultMessage="User Credentials"
            description="Title shown for block where username/password combos are entered"
          />
        }
      >
        <ContentBlockInstructions>
          <FormattedMessage
            id="usercredentialblock-instructions"
            defaultMessage="Enter the username and password here"
            description="Instructions show above username/password fields"
          />
        </ContentBlockInstructions>
        <InputLabel id={`username${id}`}>
          <FormattedMessage
            id="usercredentialblock-label-username"
            defaultMessage="Username"
            description="Label shown next to username field"
          />
        </InputLabel>
        <TextInput id={`username${id}`} value={username} onChange={this.onUsernameChange} />
        <InputLabel id={`password${id}`}>
          <FormattedMessage
            id="usercredentialblock-label-password"
            defaultMessage="Password"
            description="Label shown next to password field"
          />
        </InputLabel>
        <PasswordInput id={`password${id}`} value={password} onChange={this.onPasswordChange} />
      </ContentBlock>
    );
  }
}

UserCredentialBlock.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserCredentials: PropTypes.func.isRequired
};

export default UserCredentialBlock;
