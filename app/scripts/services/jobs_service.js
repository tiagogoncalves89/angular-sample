angular.module('main').factory('JobsService', function($http, RequestsParser) {

  var JobsService = {};

  JobsService.Clients = function(error, callbacks) {
    var url = '/clients.json';
    if (error) {
      url = '/clients_error.json';
    }
    var request = $http.get(SERVER_DOMAIN + url);

    RequestsParser.ParseCallbacks(request, callbacks);
  };

  return JobsService;

});
