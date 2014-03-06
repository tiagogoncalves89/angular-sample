angular.module('main').controller('MainController', function($scope, $routeParams, $location, $timeout, JobsService) {

  $scope.loading = true;

  var init = function() {
    $scope.error = $routeParams.error === '1';
    make_request();
  };

  var make_request = function() {
    JobsService.Clients($scope.error, {
      success: parse_result,
      error: parse_result
    });
  };

  var parse_result = function(result) {
    $timeout(function() {
      $scope.error_message = result.error;
      $scope.error_number = result.errorno;
      $scope.data = result.data;
      $scope.loading = false;
    }, 500); // Make the request change slow to show the loading page
  };

  $scope.ChangeError = function() {
    $location.replace().search('error', $scope.error ? '1' : '0');
    make_request();
  };

  init();

});
