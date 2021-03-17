# Install

Please run `npm install` to install dependencies.

Then modify `node_modules/secrets.js-grempe/secret.js` on lines 178, 179,
and 276. All instances of `crypto` should be replaced with `window.crypto`.
