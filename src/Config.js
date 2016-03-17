/**
 * @module Config
 * @see Application
 * @param {Object} stateHelperProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = (stateHelperProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
  "ngInject";

  $logProvider.debugEnabled(true);  /** Turn debug mode on/off */
  $locationProvider.html5Mode(true);  /** Turn html5 mode on */
  $urlRouterProvider.otherwise('/home');  /** If current route not in routes then redirect to home */

  /**
   * Url processing.
   * @param {Object} $injector - Ability to inject providers.
   * @param {Object} $location - Current location.
   */
  $urlRouterProvider.rule(($injector, $location) => {
    const path = $location.path();
    /** If route like as /home/ then /home */
    $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
  });


  stateHelperProvider /** Describe our states */
    .state({
      url: '/',
      name: 'home',
      controller: 'HomeController',
      controllerAs: 'Home',
      template: require('./modules/Home/views/home.jade')()
    });
};

/** Export our config */
export default Config;
