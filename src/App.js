// React imports
import React, { Fragment, Component } from 'react';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import I18nMessages from './lib/i18n.js';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Activities
import HomeActivity from './activities/HomeActivity.js';
import SaveActivity from './activities/SaveActivity.js';
import LoadActivity from './activities/LoadActivity.js';
import LoginActivity from './activities/LoginActivity.js';

// Component imports
import Header from './components/header/Header.js';
import ErrorBlock from './components/messages/ErrorBlock.js';

// Other imports
import constants from './lib/constants.js';
import api from './lib/api.js';
import './home.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    // Check the URLSearchParams for an ID, if there is one, let's start on
    // the LOAD activity and jump right in.
    let initID = null;
    let initActivity = constants.activities.HOME;
    const params = new URLSearchParams(window.location.search);
    const validParamSize = 16;
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
      l10n: i18nMessages.messages,
      user: null
    };
    
    this.changeActivity = this.changeActivity.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    
    api.checkLogin().then( (user) => {
      if (user) {
        this.setState({user: user});
      }
    }).catch( (err) => {
      this.addMessage("Error logging in", "danger");
    });
  }
  
  addMessage(message, level = "danger") {
    message = String(message);
    
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
  
  changeActivity(newActivity) {
    this.setState({ currentActivity: newActivity, id: "" });
  }
  
  async loginUser(username, password) {
    let user;
    try {
      user = await api.loginUser(username, password);
    } catch (err) {
      this.addMessage(err);
    }
    
    this.setState({
      user: user,
      currentActivity: constants.activities.HOME
    });
  }
  
  async logoutUser() {
    try {
      await api.logout()
      this.setState({
        user: null
      });
    } catch (err) {
      this.addMessage(err);
    }
  }
  
  async registerUser(username, password) {
    try {
      let user = await api.registerUser(username, password);
      this.loginUser(username, password);
    } catch (err) {
      this.addMessage(err);
    }
  }
  
  render() {
    let loadedActivity;
    switch(this.state.currentActivity) {
      default:
      case constants.activities.HOME:
        loadedActivity = (<HomeActivity user={this.state.user} changeActivity={this.changeActivity} addMessage={this.addMessage}/>);
        break;
      case constants.activities.SAVE:
        loadedActivity = (<SaveActivity addMessage={this.addMessage} />);
        break;
      case constants.activities.LOAD:
        loadedActivity = (<LoadActivity addMessage={this.addMessage} id={this.state.id} />);
        break;
      case constants.activities.LOGIN:
        loadedActivity = (<LoginActivity loginUser={this.loginUser} registerUser={this.registerUser} />);
        break;
    }
    
    return (
      <IntlProvider messages={this.state.l10n} locale={this.state.language} defaultLocale="en">
        <Header changeActivity={this.changeActivity} user={this.state.user} logoutUser={this.logoutUser} />
        <ErrorBlock messages={this.state.messages} removeMessage={this.removeMessage}/>
        <Container fluid className="ml-1">
          <Row>
            {loadedActivity}
          </Row>
          
          <Row as="footer" className="footer">
              <Col><p className="small"><FormattedMessage id="footer-main" defaultMessage="Footer text" description="Text displayed in footer of all pages"/></p></Col>
          </Row>
        </Container>
      </IntlProvider>
    );
  }
}

export default App;
