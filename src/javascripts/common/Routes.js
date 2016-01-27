/*
 * Modules
 * ========================================================================== */

import Application from '../Application';

import '../modules/Home/HomeCtrl';

/* ========================================================================== */


Application.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {

    if (!!(window.history && history.pushState)) { $locationProvider.html5Mode(true); }

    $routeProvider
      .when('/', {
        template:   require('../../templates/home.jade')(),
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
