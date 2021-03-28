// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Component imports
import LoginButton from './LoginButton.js';

// Other imports
import constants from '../../lib/constants.js';

function Header({changeActivity, user, logoutUser}) {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand
          tabIndex={0}
          as="a"
          onKeyDown={() => {changeActivity(constants.activities.HOME);}}
          onClick={() => {changeActivity(constants.activities.HOME);}}
        >
          <FormattedMessage
            id="header-nav-brand"
            defaultMessage="Password Splitter"
            description="Brand name shown on left side of Navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-nav" />
        <Navbar.Collapse id="header-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => {changeActivity(constants.activities.SAVE);}} >
              <FormattedMessage
                id="header-nav-link-save"
                defaultMessage="Split"
                description="Text shown for save activity in Navbar"
              />
            </Nav.Link>
            <Nav.Link onClick={() => {changeActivity(constants.activities.LOAD);}} >
              <FormattedMessage
                id="header-nav-link-load"
                defaultMessage="Recover"
                description="Text shown for load activity in Navbar"
              />
            </Nav.Link>
          </Nav>
          <LoginButton user={user} logoutUser={logoutUser} changeActivity={changeActivity} />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
  changeActivity: PropTypes.func.isRequired
}

export default Header;
