import React, { Component } from 'react';
import constants from './constants.js';

// I18n
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import I18nMessages from './i18n.js';

// Activities
import HomeActivity from './activities/HomeActivity.js';
import SaveActivity from './activities/SaveActivity.js';
import LoadActivity from './activities/LoadActivity.js';

//Components
import HeaderBlock from './components/HeaderBlock.js';
import ErrorBlock from './components/ErrorBlock.js';

const validParamSize = 16;

class App extends Component {
  constructor(props) {
    super(props);
    
    // Check the URLSearchParams for an ID, if there is one, let's start on
    // the LOAD activity and jump right in.
    let initID = null;
    let initActivity = constants.activities.HOME;
    const params = new URLSearchParams(window.location.search);
    if (params.has("id") && (params.get("id").length === validParamSize)) {
      initID = params.get("id");
      initActivity = constants.activities.LOAD;
    }
    
    // Determine browser locale and get matching l10n
    let i18nMessages = I18nMessages(navigator.languages);
    
    this.state = {
      currentActivity: initActivity,
      messages: [],
      id: initID,
      language: i18nMessages.bestLanguage,
      l10n: i18nMessages.messages
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
        headerText = (<FormattedMessage id="header-main" defaultMessage="Password Splitter" description="Title text in header when no activity has been selected"/>);
        break;
      case constants.activities.SAVE:
        loadedActivity = (<SaveActivity addMessage={this.addMessage} />);
        headerText = (<FormattedMessage id="header-save" defaultMessage="Save Activity" description="Title text in header when Save Activity is active"/>);
        break;
      case constants.activities.LOAD:
        loadedActivity = (<LoadActivity addMessage={this.addMessage} id={this.state.id} />);
        headerText = (<FormattedMessage id="header-load" defaultMessage="Load Activity" description="Title text in header when Load Activity is active"/>);
        break;
    }
    
    return (
      <IntlProvider messages={this.state.l10n} locale={this.state.language} defaultLocale="en">
        <div>
          <HeaderBlock headerText={headerText} changeActivity={this.changeActivity}/>
          <ErrorBlock messages={this.state.messages} removeMessage={this.removeMessage}/>
          {loadedActivity}
        </div>
      </IntlProvider>
    );
  }
  
  changeActivity(newActivity) {
    this.setState({ currentActivity: newActivity, id: null });
  }
}

export default App;
