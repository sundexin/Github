###
 Created by sundexin.com on 15/11/24
###
myModule = angular.module( "MyModule", [] )

myModule.controller 'MyCtrl', [ '$scope', ( $scope ) ->
  $scope.ctrlScope = " 山一程，水一程，身向榆关那畔行，夜深千帐灯。风一更，雪一更，聒碎乡心梦不成，故园无此声。 "
]

myModule.directive 'sidebox',  ->
  restrict:'AE'
  scope:
    title:'@'
  transclude: true
  templateUrl: '<div class="sidebox"><div class="content"><h2 class="header">{{ title }}</h2><span class="content" ng-transclude></span></div></div>'
  # link: ( scope,element,attrs ) ->
  #   scope.scopeat = attrs.scopeat
