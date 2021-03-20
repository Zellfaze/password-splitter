import bcp47match from 'bcp-47-match';
import bcp47normalize from 'bcp-47-normalize';
import i18nEnUs from '../compiled-lang/en.json';

const i18nMessages = {
  en: i18nEnUs
};

class I18nMessages {
  constructor(clientLanguages) {
    // Get all the languages we have in a normalized list
    let availableLanguages = this.getMessagesList();
    
    // Find the best match to the browser
    this.bestLanguage = bcp47match.lookup(navigator.languages, availableLanguages);
    
    // Set the messages property accordingly
    this.messages = this.getMessages(this.bestLanguage);
  }
  
  // Returns a normalized list of bcp47 codes for available languages
  getMessagesList() {
    return Object.keys(i18nMessages).map( (language) => {
      return bcp47normalize(language);
    });
  }
  
  // Returns the messages object representing the selected lanauge
  getMessages(language) {
    let languageKey = Object.keys(i18nMessages).find( (currentLanauge) => {
      return language === bcp47normalize(currentLanauge);
    });
    
    return i18nMessages[languageKey];
  }
}

var i18nMessagesObjFactory = (clientLanguages) => { return new I18nMessages(clientLanguages); }

export default i18nMessagesObjFactory;
