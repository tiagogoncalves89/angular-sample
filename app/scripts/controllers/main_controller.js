/**
* Controller da página principal do site.
*
* @namespace main.controllers
* @class MainController
*/
angular.module('main').controller('MainController', function($scope, $routeParams, $location, $timeout, JobsService) {

  $scope.loading = true;

  /**
  * Identifica se é uma página com erro ou não através da url e
  * chama o método para fazer uma nova requisição de clientes.
  *
  * @method init
  * @private
  */
  var init = function() {
    $scope.error = $routeParams.error === '1';
    make_request();
  };

  /**
  * Chama o serviço de clientes para retornar a lista de clientes.
  *
  * @method make_request
  * @private
  */
  var make_request = function() {
    JobsService.Clients($scope.error, {
      success: parse_result,
      error: parse_result
    });
  };

  /**
  * Faz o tratamento do resultado do webservice e preenche nas
  * váriaveis da view.
  *
  * @method parse_result
  * @private
  */
  var parse_result = function(result) {
    $timeout(function() {
      $scope.error_message = result.error;
      $scope.error_number = result.errorno;
      $scope.data = result.data;
      $scope.loading = false;
    }, 500); // Make the request change slow to show the loading page
  };

  /**
  * Altera a url com o parâmetro de erro de acordo com o checkbox e
  * chama o método para fazer uma nova requisição.
  *
  * @method ChangeError
  */
  $scope.ChangeError = function() {
    $location.replace().search('error', $scope.error ? '1' : '0');
    make_request();
  };

  init();

});
