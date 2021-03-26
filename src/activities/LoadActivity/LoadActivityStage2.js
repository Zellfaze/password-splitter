// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import ActivityStage from '../../components/ActivityStage.js';
import UserCredentialBlock from '../../components/contentblocks/UserCredentialBlock.js';
import DiscoveredDataBlock from '../../components/contentblocks/DiscoveredDataBlock.js';
import LoadText from './LoadText.js';

class LoadActivityStage2 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      credentials: []
    };
    
    this.setUserCredentials = this.setUserCredentials.bind(this);
    this.advanceSection = this.advanceSection.bind(this);
  }
  
  //TODO: Make sure each username and password box is set before allowing advancement
  advanceSection() {
    this.props.onNextSection(this.state.credentials);
  }
  
  setUserCredentials(userindex, username, password) {
    let newCredentials = this.state.credentials;
    
    if ((userindex >= 0) && (userindex <= this.props.groupSize)) {
      newCredentials[userindex].username = username;
      newCredentials[userindex].password = password;
      
      this.setState({
        credentials: newCredentials
      });
    }
  }
  
  resizeArray(array, newSize) {
    while(newSize > array.length)
      array.push({username: "", password: ""});
    array.length = newSize;
    return array
  }
  
  render() {
    //Create an array of ints of size groupSize
    const arrayGenerator = (num) => {let x=[];let i=0;while(x.push(i++)<num); return x;};
    const groupSizeArray = arrayGenerator(this.props.groupSize);
    const credentialsArray = this.resizeArray(this.state.credentials, this.props.groupSize);
    
    let credentials= groupSizeArray.map( (key) => {
      return <UserCredentialBlock key={key} id={key} setUserCredentials={this.setUserCredentials} username={credentialsArray[key].username} password={credentialsArray[key].password} />
    });
    
    return (
      <ActivityStage advanceSection={this.advanceSection} >
          <DiscoveredDataBlock users={this.props.users} />
          {credentials}
      </ActivityStage>
    );
  }
}

LoadActivityStage2.propTypes = {
  groupSize: PropTypes.number.isRequired,
  onNextSection: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

export default LoadActivityStage2; 
 
