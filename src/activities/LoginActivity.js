// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Component imports
import MainBox from '../components/MainBox.js';
import Sidebar from '../components/Sidebar.js';
import LoginActivityLogin from './LoginActivity/LoginActivityLogin.js';
import LoginActivityRegister from './LoginActivity/LoginActivityRegister.js';

function LoginActivity({loginUser, registerUser}) {
  return (
    <Fragment>
      <MainBox>
        <h1><FormattedMessage id="header-login" defaultMessage="Login" description="Title text on login activity"/></h1>
        <LoginActivityLogin onSubmit={loginUser}/>
        
        <h2 className="mt-2 h4"><FormattedMessage id="login-register" defaultMessage="Create Account" description="Title for registration section of login activity"/></h2>
        <LoginActivityRegister onSubmit={registerUser}/>
      </MainBox>
      <Sidebar>
        <h1 className="h4">Instructions</h1>
        <p>PLEASE CHANGE AND TRANSLATE ME! (plus above header)</p>
      </Sidebar>
    </Fragment>
  );
}

LoginActivity.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

export default LoginActivity;
