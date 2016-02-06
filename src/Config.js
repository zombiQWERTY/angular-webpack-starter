const Config = ($routeProvider, $locationProvider) => {
  if (!!(window.history && history.pushState)) {
    $locationProvider.html5Mode(true);
  }

  $routeProvider
    .when('/', {
      template:   require('./modules/Home/views/home.jade')(),
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
};

Config.$inject = ['$routeProvider', '$locationProvider'];

export default Config;
