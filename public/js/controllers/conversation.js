'use strict';

angular.module('socialLogin')
.controller('conversationCtrl', function($scope, userSrvc, $stateParams, $http) {
  $scope.me = userSrvc.me
  $scope.you = userSrvc.allUsers[$stateParams.youId];

  $scope.sendMessage = function(meId, youId){
    $http.post('/conversation/' + youId + '/' + meId)
    .then(function(resp){
      console.log('Made post: ',resp);
    })
  }

});
