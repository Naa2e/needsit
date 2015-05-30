(function(){
  'use strict';

  angular.module('myapp', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name="Nicole";
  }]);
})();
