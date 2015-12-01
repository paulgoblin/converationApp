'use strict';

angular.module('socialLogin')
.controller('homeCtrl', function($scope, $auth, userSrvc, conversationSrvc) {
  $scope.allUsers = userSrvc.allUsers;
  $scope.me = userSrvc.me
  $scope.getConvos = function (youId, meId){
    conversationSrvc.getConvos(youId, meId);
  }
});
