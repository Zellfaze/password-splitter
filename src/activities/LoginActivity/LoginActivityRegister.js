// React imports
import { Component } from 'react';
import {defineMessage, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginActivityRegister extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      password: "",
      passwordConfirm: ""
    }
    
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setPasswordConfirm = this.setPasswordConfirm.bind(this);
    this.clicked = this.clicked.bind(this);
  }
  
  setUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  
  setPassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  
  setPasswordConfirm(event) {
    this.setState({
      passwordConfirm: event.target.value
    });
  }
  
  clicked() {
    if ((this.state.username === "") || (this.state.password === "")) { return; }
    if (this.state.password !== this.state.passwordConfirm) { return; }
    
    this.props.onSubmit(this.state.username, this.state.password);
  }
  
  render() {
    let usernameMsg = (<FormattedMessage id="login-register-user" defaultMessage="Username" description="Label displayed next to username field on registration page"/>);
    let passwordMsg = (<FormattedMessage id="login-register-password" defaultMessage="Password" description="Label displayed next to password field on registration page"/>);
    let passwordConfirmMsg = (<FormattedMessage id="login-register-passwordConfirm" defaultMessage="Confirm Password" description="Label displayed next to password confirm field on registration page"/>);
    let buttonMsg = (<FormattedMessage id="login-register-submit" defaultMessage="Create Account" description="Button text for button on login page underneath username/password inputs"/>);
    
    return (
      <Form>
        <Form.Group controlId="login-register-username">
          <Form.Label>{usernameMsg}</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.setUsername} />
        </Form.Group>
        
        <Form.Group controlId="login-register-password">
          <Form.Label>{passwordMsg}</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.setPassword} />
        </Form.Group>
        
        <Form.Group controlId="login-register-password-confirm">
          <Form.Label>{passwordConfirmMsg}</Form.Label>
          <Form.Control type="password" value={this.state.passwordConfirm} onChange={this.setPasswordConfirm} />
        </Form.Group>
        
        <Button variant="primary" size="lg" onClick={this.clicked}>{buttonMsg}</Button>
      </Form>
    );
  }
}

LoginActivityRegister.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginActivityRegister;
 
