# angular + testing (protractor, karma, jasmine) + webpack + babel + postcss + jade + livereload workflow

This workflow serves as a starting point for building Angular 1.x applications using WebPack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

It is a direct port of the amazing [angular workflow](https://github.com/Foxandxss/angular-webpack-workflow) of [Jesús Rodríguez](https://github.com/Foxandxss). All the credits goes for him.

## Features

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.js.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting and asset minification.
* PostCSS and jade support by default.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm run-scripts.

## Installation

To use it, just clone this repo and install the npm dependencies:

```shell
$ git clone https://github.com/zombiQWERTY/angular-webpack-babel-postcss-jade-livereload-workflow my_app
$ cd my_app
$ npm install
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`. Maybe `sudo` required.

* `build` - generate a minified build to dist folder
* `dev` - start development server, try it by opening `http://localhost:8080/`
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes
* `stats` - genetate stats.json file
* `install` - install all dependencies from package.json

See what each script does by looking at the `scripts` section in [package.json](./package.json).

## Base app and tutorial

This repo is finally finished boilerplate for your app.

[Content folder](./src/content/) is for your public images (images, that loads from html/jade). The path for `src` 
attribute will be without parent folder name (`content`).

## License

The license of this workflow is MIT.
