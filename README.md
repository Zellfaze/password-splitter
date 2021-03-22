# Development Build

Please run `npm install` to install dependencies.

Then run the following to patch `secrets.js`:
```bash
patch -u node_modules/secrets.js-grempe/secret.js -i secrets.patch
```

Lastly compile the localizations:
```bash
npm run easy-compile
```

# Production Build

```bash
mkdir app/
cd app/
git clone https://github.com/Zellfaze/password-splitter-express
git clone https://github.com/Zellfaze/password-splitter
cd password-splitter
npm install
patch -u node_modules/secrets.js-grempe/secret.js -i secrets.patch
npm run easy-compile
npm run build
cp -r build/* ../password-splitter-express/public/
cd ../password-splitter-express/
npm install
npm start
```
