// Generated by CoffeeScript 1.10.0

/*
 Created by sundexin.com on 15/11/24
 */

(function() {
  var myModule;

  myModule = angular.module("MyModule", []);

  myModule.controller('MyCtrl', [
    '$scope', function($scope) {
      return $scope.ctrlScope = " 山一程，水一程，身向榆关那畔行，夜深千帐灯。风一更，雪一更，聒碎乡心梦不成，故园无此声。 ";
    }
  ]);

  myModule.directive('myScope', function() {
    return {
      restrict: 'AE',
      scope: {
        scopeat: '@'
      },
      templateUrl: 'scope@.html'
    };
  });

}).call(this);
