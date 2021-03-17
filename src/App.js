import React, { Component } from 'react';
import constants from './constants.js';

// Activities
import HomeActivity from './activities/HomeActivity.js';
import SaveActivity from './activities/SaveActivity.js';
import LoadActivity from './activities/LoadActivity.js';

//Components
import HeaderBlock from './components/HeaderBlock.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentActivity: constants.activities.HOME};
    
    this.changeActivity = this.changeActivity.bind(this);
  }
  
  render() {
    let loadedActivity;
    let headerText;
    switch(this.state.currentActivity) {
      default:
      case constants.activities.HOME:
        loadedActivity = (<HomeActivity changeActivity={this.changeActivity}/>);
        headerText = "Password Splitter";
        break;
      case constants.activities.SAVE:
        loadedActivity = (<SaveActivity />);
        headerText = "Save Activity";
        break;
      case constants.activities.LOAD:
        loadedActivity = (<LoadActivity />);
        headerText = "Load Activity";
        break;
    }
    
    return (
      <div>
        <HeaderBlock headerText={headerText} changeActivity={this.changeActivity}/>
        {loadedActivity}
      </div>
    );
  }
  
  changeActivity(newActivity) {
    this.setState({ currentActivity: newActivity });
  }
}

export default App;
