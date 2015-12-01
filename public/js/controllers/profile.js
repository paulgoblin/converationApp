'use strict';

angular.module('socialLogin')
.controller('profileCtrl', function($scope, $auth, $state, userSrvc) {

  $scope.me = userSrvc.allUsers[userSrvc.me];
  $scope.allUsers = userSrvc.allUsers;

  if(!$auth.isAuthenticated()) {
    return $state.go('home');
  }


});
