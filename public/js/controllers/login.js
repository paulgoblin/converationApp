'use strict';

angular.module('socialLogin')
.controller('loginCtrl', function($scope, $auth, $http, userSrvc, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
      $http.get('/users/me').then(function(resp){
        userSrvc.saveMe(resp.data);
        $state.go('profile')
      })
    })
    .catch(function(err){
      console.error(err);
    });
  };

});
