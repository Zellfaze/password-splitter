// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Component imports
import MainBox from '../components/MainBox.js';
import Sidebar from '../components/Sidebar.js';

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
      <Fragment>
        <MainBox>
          <h1><FormattedMessage id="header-main" defaultMessage="Password Splitter" description="Title text in header when no activity has been selected"/></h1>
          <Row className="justify-content-center">
            <AutoColButtonComponent type="primary" onClick={this.onClickSave} text="Save" /> 
            <AutoColButtonComponent type="secondary" onClick={this.onClickLoad} text="Load" />
          </Row>
        </MainBox>
        <Sidebar>
          <h1 className="h4">Instructions</h1>
          <p>PLEASE CHANGE AND TRANSLATE ME! (plus above header)</p>
        </Sidebar>
      </Fragment>
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
 
