// Generated by CoffeeScript 1.10.0

/*
 Created by sundexin.com on 15/12/8
 */

(function() {
  var myModule;

  myModule = angular.module('myModule', []);

  myModule.factory('commonFactory', [
    '$q', '$http', function($q, $http) {
      return {
        commonFn: function() {
          var defer;
          defer = $q.defer();
          $http({
            method: 'GET',
            url: './js/data.json'
          }).success(function(data, status, headers, config) {
            return defer.resolve(data, console.log(data));
          }).error(function(data, status, headers, config) {
            return defer.reject();
          });
          console.log(defer.promise);
          return defer.promise;
        }
      };
    }
  ]);

  myModule.controller('Controller1', [
    '$scope', '$q', 'commonFactory', function($scope, $q, commonFactory) {
      var p;
      p = commonFactory.commonFn();
      return p.then((function(data) {
        $scope.text = data[0].firstname;
        $scope.servicetrs = data;
      }), function(data) {
        alert("请求错误");
      });
    }
  ]);

}).call(this);
