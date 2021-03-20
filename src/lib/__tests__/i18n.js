import I18nMessages from '../i18n.js';

// Set up mock navigation
var navigation = {languages: [
  "en-US",
  "en"
]};

// Setup mock I18nMessages
I18nMessages.getMessagesList = jest.fn(() => 'Test');

test('Test best language selection', () => {
  let i18nMessages = I18nMessages(navigator.languages);
  expect(i18nMessages.bestLanguage).toBe('en');
});
