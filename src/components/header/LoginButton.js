// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Nav from 'react-bootstrap/Nav';

// Other imports
import constants from '../../lib/constants.js';

function LoginButton({user, logoutUser, changeActivity}) {
  if ((user === null) || (user === undefined)) {
    // User is not logged in
    return (
      <Nav>
        <Nav.Link onClick={() => {changeActivity(constants.activities.LOGIN);}}>
          <FormattedMessage
            id="header-nav-login"
            defaultMessage="Login"
            description="Text shown for login button in Navbar"
          />
        </Nav.Link>
      </Nav>
    );
  }
  // User is logged in
  return (
    <Nav>
      <Nav.Link onClick={logoutUser}>
        <FormattedMessage
          id="header-nav-logout"
          defaultMessage="Logout"
          description="Text shown for logout button in Navbar"
        />
      </Nav.Link>
    </Nav>
  );
}

LoginButton.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
  changeActivity: PropTypes.func.isRequired
}

export default LoginButton;
