// React imports
import { Fragment, Component } from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

// Activity stage imports
import SaveActivityStage1 from './SaveActivity/SaveActivityStage1.js';
import SaveActivityStage2 from './SaveActivity/SaveActivityStage2.js';
import SaveActivityStage3 from './SaveActivity/SaveActivityStage3.js';
import SaveActivityStage4 from './SaveActivity/SaveActivityStage4.js';

// Component imports
import MainBox from '../components/MainBox.js';
import Sidebar from '../components/Sidebar.js';

// Other imports
import CryptoFunctions from '../lib/crypto.js';
import api from '../lib/api.js';


const stages = {
  PLAINTEXT: 0,
  XOFN: 1,
  CREDENTIALS: 2,
  CIPHERTEXT: 3
};

class SaveActivity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stagenumber: 0,
      groupSize: 2,
      requiredMembers: 2,
      cipherText: "",
      shareList: []
    };
    
    this.plaintext = "";
    
    this.generateCipherText = this.generateCipherText.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
    this.advanceSection1 = this.advanceSection1.bind(this);
    this.advanceSection2 = this.advanceSection2.bind(this);
    this.advanceSection3 = this.advanceSection3.bind(this);
  }
  
  generateCipherText(plaintext, groupSize, requiredMembers, credentials) {
    // Generate the blob
    CryptoFunctions.generateBlob(plaintext, groupSize, requiredMembers, credentials).then( (blob) => {
      // Attempt to save the blob
      this.props.addMessage("Saving...", "info");
      return api.saveBlob(blob);
    }).then( (response) => {
      // Everything went fine, let's show them the ID
      this.props.addMessage("Saved.", "info");
      this.setState({
        stagenumber: this.state.stagenumber+1,
        cipherText: response.id
      });
    }).catch( (err) => {
      this.props.addMessage(err, "danger");
    });
  }
  
  advanceSection() {
    this.setState({stagenumber: this.state.stagenumber+1});
  }
  
  advanceSection1(plaintext) {
    this.plaintext = plaintext;
    this.setState({
      stagenumber: this.state.stagenumber+1,
    });
  }
  
  advanceSection2(groupSize, requiredMembers) {
    this.setState({
      stagenumber: this.state.stagenumber+1,
      groupSize: groupSize,
      requiredMembers: requiredMembers
    });
  }
  
  advanceSection3(credentialsArray) {
    // Make sure every credential object is defined
    const allDefined = credentialsArray.map( (credentials) => {
      // Test each credential
      if ((credentials.username === "") || (credentials.password === "")) {
        return false;
      }
      return true;
    }).reduce( (finalIsValid, currentIsValid) => {
      // Reduce array down to single bool
      return finalIsValid && currentIsValid;
    });
    
    if (!allDefined) {
      return this.props.addMessage("All username/password boxes must be filled!", "danger");
    }
    this.generateCipherText(this.plaintext, this.state.groupSize, this.state.requiredMembers, credentialsArray);
  }
  
  render() {
    let loadedStage;
    switch(this.state.stagenumber) {
      default:
      case stages.PLAINTEXT:
        loadedStage = (
          <SaveActivityStage1 onNextSection={this.advanceSection1} />
        );
        break;
      case stages.XOFN:
        loadedStage = (
          <SaveActivityStage2 onNextSection={this.advanceSection2} />
        );
        break;
      case stages.CREDENTIALS:
        loadedStage = (
          <SaveActivityStage3 onNextSection={this.advanceSection3} groupSize={this.state.groupSize} />
        );
        break;
      case stages.CIPHERTEXT:
        loadedStage = (
          <SaveActivityStage4 cipherText={this.state.cipherText} />
        );
        break;
    }
    
    return (
      <Fragment>
        <MainBox>
          <h1><FormattedMessage id="header-save" defaultMessage="Save Activity" description="Title text in header when Save Activity is active"/></h1>
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

SaveActivity.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default SaveActivity;
