# start-standard-preset

[![npm](https://img.shields.io/npm/v/start-start-preset.svg?style=flat-square)](https://www.npmjs.com/package/start-start-preset)
[![linux build](https://img.shields.io/travis/start-runner/start-preset/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/start-preset)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/start-preset/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/start-preset)
[![deps](https://img.shields.io/gemnasium/start-runner/start-preset.svg?style=flat-square)](https://gemnasium.com/start-runner/start-preset)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

🎏 [Standard Style](http://standardjs.com/) preset for [Start](https://github.com/start-runner/start).

The same build tasks as [start-start-preset](https://github.com/start-runner/start-preset) but using
[start-standard](https://github.com/effervescentia/start-standard) instead of `start-eslint`.
However, as `standard` is a derivative of `eslint`, an `.eslintrc` file can be used to further configure the rules applied.

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

Available commands: same commands as `start-start-preset`.

### Extend

[Examples](https://github.com/start-runner/start-preset#extend)  of extending a preset.
