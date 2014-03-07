/**
* Módulo para fazer tratamentos nas requisições.
*
* @namespace main.libraries
* @class RequestsParser
*/
angular.module('main').factory('RequestsParser', function() {

  var RequestsParser = {};

  /**
  * Aplica os callbacks em uma requisição e trata o retorno,
  * para redirecionar para erro.
  *
  * @method ParseCallbacks
  */
  RequestsParser.ParseCallbacks = function(request, callbacks) {
    if (typeof(callbacks) !== 'undefined') {
      if (typeof(callbacks.error) !== 'undefined') {
        request.error(callbacks.error);
      }

      request.success(function(result) {
        if (result.ok && typeof(callbacks.success) !== 'undefined') {
          request.success(callbacks.success);
        } else if (typeof(callbacks.error) !== 'undefined') {
          callbacks.error(result);
        }
      });
    }
  };

  return RequestsParser;

});
