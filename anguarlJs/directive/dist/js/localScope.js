// Generated by CoffeeScript 1.10.0

/*
 Created by sundexin.com on 15/11/24
 */

(function() {
  var myModule;

  myModule = angular.module("MyModule", []);

  myModule.directive('localScope', function() {
    return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'localScopeDom.html',
      replace: true
    };
  });

}).call(this);