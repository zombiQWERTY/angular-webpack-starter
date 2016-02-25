const Config = ($stateProvider, $urlRouterProvider, $locationProvider) => { /*@ngInject*/
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:        '/',
      template:   require('./modules/Home/views/home.jade')(),
      controller: 'HomeController'
    });
};

export default Config;
