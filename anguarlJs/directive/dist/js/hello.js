// Generated by CoffeeScript 1.10.0

/*
 Created by sundexin.com on 15/11/24
 */

(function() {
  var myModule;

  myModule = angular.module("MyModule", []);

  myModule.directive('hello', function() {
    return {
      restrict: 'AEMC',
      template: '<div>Sina china!</div>',
      replace: false
    };
  });

}).call(this);
