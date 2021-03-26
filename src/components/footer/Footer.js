// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
  return (
    <Row as="footer" className="footer">
      <Col><p className="small"><FormattedMessage id="footer-main" defaultMessage="Footer text" description="Text displayed in footer of all pages"/></p></Col>
    </Row>
  );
}

export default Footer;
