import React, { Component } from 'react';
import constants from './constants.js';

// Activities
import HomeActivity from './activities/HomeActivity.js';
import SaveActivity from './activities/SaveActivity.js';
import LoadActivity from './activities/LoadActivity.js';

//Components
import HeaderBlock from './components/HeaderBlock.js';
import ErrorBlock from './components/ErrorBlock.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: constants.activities.HOME,
      messages: []
    };
    
    this.changeActivity = this.changeActivity.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }
  
  addMessage(message, level) {
    let currentMessages = this.state.messages;
    let id = Math.floor((Math.random() * 1000000));
    currentMessages.push({
      id: id,
      message: message,
      level: level
    });
    this.setState({messages: currentMessages});
  }
  
  removeMessage(id) {
    let newMessages = [];
    this.state.messages.forEach( (currentMessage) => {
      if (currentMessage.id !== id) {
        newMessages.push(currentMessage);
      }
    });
    
    this.setState({messages: newMessages});
  }
  
  render() {
    let loadedActivity;
    let headerText;
    switch(this.state.currentActivity) {
      default:
      case constants.activities.HOME:
        loadedActivity = (<HomeActivity changeActivity={this.changeActivity} addMessage={this.addMessage}/>);
        headerText = "Password Splitter";
        break;
      case constants.activities.SAVE:
        loadedActivity = (<SaveActivity addMessage={this.addMessage} />);
        headerText = "Save Activity";
        break;
      case constants.activities.LOAD:
        loadedActivity = (<LoadActivity addMessage={this.addMessage} />);
        headerText = "Load Activity";
        break;
    }
    
    return (
      <div>
        <HeaderBlock headerText={headerText} changeActivity={this.changeActivity}/>
        <ErrorBlock messages={this.state.messages} removeMessage={this.removeMessage}/>
        {loadedActivity}
      </div>
    );
  }
  
  changeActivity(newActivity) {
    this.setState({ currentActivity: newActivity });
  }
}

export default App;
