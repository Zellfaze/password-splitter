// React imports
import React, { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Other imports
import constants from '../../lib/constants.js';

function Header({changeActivity}) {
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
          <Nav>
            <Nav.Link>
              <FormattedMessage
                id="header-nav-login"
                defaultMessage="Login"
                description="Text shown for login button in Navbar"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  changeActivity: PropTypes.func.isRequired
}

export default Header;
