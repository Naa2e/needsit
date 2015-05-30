var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Developer';
}]);


controllers.controller('AboutController', ['$scope', function($scope){
  $scope.message = 'Designer';
}]);


controllers.controller('NeedsController', ['$scope', function($scope){
  $scope.message = 'Dancer';
  $scope.needs=[];

$scope.addNeeds=function(thingy){
  $scope.needs.push(thingy);
  $scope.newNeed=' ';
};
}]);
