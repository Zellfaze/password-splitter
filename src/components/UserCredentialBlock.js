import React, { Component, Fragment } from 'react';
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
    return (
      <ContentBlock title="User Credentials" body={
        <Fragment>
          <p className="card-text">Enter the username and password here</p>
          <label htmlFor={`username${this.props.id}`} className="form-label">Username</label>
          <input type="text" className="form-control" id={`username${this.props.id}`} value={this.props.username} onChange={this.onUsernameChange} />
          <label htmlFor={`password${this.props.id}`} className="form-label">Password</label>
          <input type="password" className="form-control" id={`password${this.props.id}`} value={this.props.password} onChange={this.onPasswordChange} />
        </Fragment>
      } />
    );
  }
} 

export default UserCredentialBlock;
