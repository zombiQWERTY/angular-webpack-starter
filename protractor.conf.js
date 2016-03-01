exports.config = {
  baseUrl: 'http://localhost:8080/',

  /** use `npm run e2e` */
  specs: [
    './src/**/*.e2e.js'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  chromeDriver: '/usr/local/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.21-x64-chromedriver',

  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar'
};
