# start-start-preset

[![npm](https://img.shields.io/npm/v/start-start-preset.svg?style=flat-square)](https://www.npmjs.com/package/start-start-preset)
[![linux build](https://img.shields.io/travis/start-runner/start-preset/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/start-preset)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/start-preset/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/start-preset)
[![deps](https://img.shields.io/gemnasium/start-runner/start-preset.svg?style=flat-square)](https://gemnasium.com/start-runner/start-preset)

🎏 [Standard Style](http://standardjs.com/) preset for [Start](https://github.com/start-runner/start).

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Semistandard - JavaScript Style Guide](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)
[![happiness - JavaScript Sytle Guide](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

## Install

```sh
npm install --save-dev start-standard-preset
# or
yarn add --dev start-standard-preset
```

## Usage

See [documentation](https://github.com/start-runner/start#readme) and [source tasks file](lib/index.js) for details.

### Simple

```js
// package.json
"scripts": {
  "start": "start-runner --preset start-standard-preset"
}
```

Available commands:

```sh
npm start build
npm start dev
npm start lint
npm start test
npm start tdd
npm start coverage
npm start ci
# or
yarn start build
yarn start dev
yarn start lint
yarn start test
yarn start tdd
yarn start coverage
yarn start ci
```

### Extend


```js
// tasks.js
import start from 'start-start-preset';

export * from 'start-start-preset';

export const myTasksRunner = () => start(
  // ...
);
```

Example relies on [babel-plugin-transform-export-extensions](https://babeljs.io/docs/plugins/transform-export-extensions/).

```js
// package.json
"scripts": {
  "start": "start-runner --file tasks.js"
}
```

Available commands:

```sh
npm start build
npm start dev
npm start lint
npm start test
npm start tdd
npm start coverage
npm start ci
npm start myTasksRunner
# or
yarn start build
yarn start dev
yarn start lint
yarn start test
yarn start tdd
yarn start coverage
yarn start ci
yarn start myTasksRunner
```
