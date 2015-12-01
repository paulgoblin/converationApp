'use strict';

angular.module('socialLogin')
.controller('conversationCtrl', function($scope, userSrvc, $stateParams, $http, conversationSrvc) {
  $scope.me = userSrvc.me
  $scope.you = userSrvc.allUsers[$stateParams.youId];

  $scope.sendMessage = function(meId, youId, message){
    var req = {
      method: 'POST',
      url: '/conversation/' + youId + '/' + meId,
      data: { 
        sender: meId,
        date: Date.now(),
        message: message
      }
    }
    console.log('reqeust', req)
    $http(req)
    .then(function(resp){
      console.log('Made post: ',resp);
    })
    .catch(function(err){
      console.log('shit\'s fucked')
    })
  }

});
