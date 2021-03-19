# Install

Please run `npm install` to install dependencies.

Then modify `node_modules/secrets.js-grempe/secret.js` on line 26 from:
```js
return (root.secrets = factory())
```

to:
```js
return (root.secrets = factory(window.crypto))
```

Lastly compile the localizations:
```bash
npm run easy-compile
```
