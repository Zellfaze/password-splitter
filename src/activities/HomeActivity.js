// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Other imports
import constants from '../lib/constants.js';

class HomeActivity extends Component {
  constructor(props) {
    super(props);
    
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickLoad = this.onClickLoad.bind(this);
  }
  
  onClickSave() {
    this.props.changeActivity(constants.activities.SAVE);
  }
  
  onClickLoad() {
    this.props.changeActivity(constants.activities.LOAD);
  }
  
  render() {
    //TODO: Translate strings on these AutoColButtonComponents
    return (
      <Container fluid className="mt-2">
        <Row className="justify-content-center">
          <AutoColButtonComponent type="primary" onClick={this.onClickSave} text="Save" /> 
          <AutoColButtonComponent type="secondary" onClick={this.onClickLoad} text="Load" />
        </Row>
      </Container>
    );
  }
}

HomeActivity.propTypes = {
  changeActivity: PropTypes.func.isRequired
};

function AutoColButtonComponent(props) {
  return (
    <Col md="auto">
      <Button size="lg" variant={props.type} onClick={props.onClick}>{props.text}</Button>
    </Col>
  );
}

AutoColButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
};


export default HomeActivity;
 
