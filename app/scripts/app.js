var SERVER_DOMAIN = 'http://localhost:8000';

angular.module('main', ['ngRoute']).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main/index.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
