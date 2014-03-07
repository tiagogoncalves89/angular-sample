/**
* Consulta o webservice de clientes.
*
* @namespace main.services
* @class JobsService
*/
angular.module('main').factory('JobsService', function($http, RequestsParser) {

  var JobsService = {};

  /**
  * Retorna a lista de clientes. Se específicado o error como true,
  * consulta o método que simula um erro no WS.
  *
  * @method Clients
  */
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
