// React imports
import { Component } from 'react';
import {defineMessage, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginActivityLogin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      password: ""
    }
    
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
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
  
  clicked() {
    if ((this.state.username === "") || (this.state.password === "")) { return; }
    
    this.props.onSubmit(this.state.username, this.state.password);
  }
  
  render() {
    let usernameMsg = (<FormattedMessage id="login-login-user" defaultMessage="Username" description="Label displayed next to username field on login page"/>);
    let passwordMsg = (<FormattedMessage id="login-login-password" defaultMessage="Password" description="Label displayed next to password field on login page"/>);
    let buttonMsg = (<FormattedMessage id="login-login-submit" defaultMessage="Login" description="Button text for button on login page underneath username/password inputs"/>);
    
    return (
      <Form>
        <Form.Group controlId="login-username">
          <Form.Label>{usernameMsg}</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.setUsername} />
        </Form.Group>
        
        <Form.Group controlId="login-password">
          <Form.Label>{passwordMsg}</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.setPassword} />
        </Form.Group>
        
        <Button variant="primary" size="lg" onClick={this.clicked}>{buttonMsg}</Button>
      </Form>
    );
  }
}

LoginActivityLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginActivityLogin;
