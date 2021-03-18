# Install

Please run `npm install` to install dependencies.

Then modify `node_modules/secrets.js-grempe/secret.js` on line 26 from:
  `return (root.secrets = factory())``
to:
  `return (root.secrets = factory(window.crypto))`
