import React, { Component, Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import ContentBlock from './ContentBlock.js';

class UserCredentialBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  
  onUsernameChange(event) {
    this.props.setUserCredentials(this.props.id, event.target.value, this.props.password);
  }
  
  onPasswordChange(event) {
    this.props.setUserCredentials(this.props.id, this.props.username, event.target.value);
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
        body={
          <Fragment>
            <p className="card-text">
              <FormattedMessage
                id="usercredentialblock-instructions"
                defaultMessage="Enter the username and password here"
                description="Instructions show above username/password fields"
              />
            </p>
            <label htmlFor={`username${id}`} className="form-label">
              <FormattedMessage
                id="usercredentialblock-label-username"
                defaultMessage="Username"
                description="Label shown next to username field"
              />
            </label>
            <input type="text" className="form-control" id={`username${id}`} value={username} onChange={this.onUsernameChange} />
            <label htmlFor={`password${id}`} className="form-label">
              <FormattedMessage
                id="usercredentialblock-label-password"
                defaultMessage="Password"
                description="Label shown next to password field"
              />
            </label>
            <input type="password" className="form-control" id={`password${id}`} value={password} onChange={this.onPasswordChange} />
          </Fragment>
        }
      />
    );
  }
} 

export default UserCredentialBlock;
