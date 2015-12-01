'use strict';

angular.module('socialLogin')
.controller('homeCtrl', function($scope, $auth, userSrvc) {
  $scope.allUsers = userSrvc.allUsers;
  $scope.me = userSrvc.me

});
