// Generated by CoffeeScript 1.10.0
(function() {
  var myModule;

  myModule = angular.module('myModule', []);

  myModule.controller('ngShowCtrl', [
    '$scope', function($scope) {
      $scope.show = false;
      $scope.toggleMenu = function() {
        $scope.show = !$scope.show;
      };
    }
  ]);

}).call(this);
