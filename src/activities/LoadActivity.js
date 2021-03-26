// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Activity Stage imports
import LoadActivityStage1 from './LoadActivity/LoadActivityStage1.js';
import LoadActivityStage2 from './LoadActivity/LoadActivityStage2.js';
import LoadActivityStage3 from './LoadActivity/LoadActivityStage3.js';

// Component imports
import MainBox from '../components/MainBox.js';
import Sidebar from '../components/Sidebar.js';

// Other imports
import CryptoFunctions from '../lib/crypto.js';

const stages = {
  CIPHERTEXT: 0,
  CREDENTIALS: 1,
  PLAINTEXT: 2
};

class LoadActivity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stagenumber: 0,
      cipherText: "",
      plainText: "",
      foundUsers: [],
      requiredMembers: 0
    };
    
    this.advanceSection1 = this.advanceSection1.bind(this);
    this.advanceSection2 = this.advanceSection2.bind(this);
  }
  
  advanceSection1(blob) {
    // Extract the user list from the blob
    CryptoFunctions.extractMetadataFromBlob(blob).then( (metadata) => {
      this.setState({
        cipherText: blob,
        foundUsers: metadata.users,
        requiredMembers: metadata.requiredMembers,
        stagenumber: this.state.stagenumber+1
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  advanceSection2(credentials) {
    CryptoFunctions.decryptBlob(this.state.cipherText, credentials).then( (results) => {
      this.setState({
        plainText: results,
        stagenumber: this.state.stagenumber+1
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  render() {
    let loadedStage;
    switch(this.state.stagenumber) {
      default:
      case stages.CIPHERTEXT:
        loadedStage = (
          <LoadActivityStage1 onNextSection={this.advanceSection1} addMessage={this.props.addMessage} id={this.props.id} />
        );
        break;
      case stages.CREDENTIALS:
        loadedStage =(
          <LoadActivityStage2 onNextSection={this.advanceSection2} groupSize={this.state.requiredMembers} users={this.state.foundUsers} />
        );
        break;
      case stages.PLAINTEXT:
        loadedStage =(
          <LoadActivityStage3 text={this.state.plainText} />
        );
        break;
    }
    
    return (
      <Fragment>
        <MainBox>
          <h1><FormattedMessage id="header-load" defaultMessage="Load Activity" description="Title text in header when Load Activity is active"/></h1>
          {loadedStage}
        </MainBox>
        <Sidebar>
          <h1 className="h4">Instructions</h1>
          <p>PLEASE CHANGE AND TRANSLATE ME! (plus above header)</p>
        </Sidebar>
      </Fragment>
    );
  }
}

LoadActivity.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default LoadActivity;
