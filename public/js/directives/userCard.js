angular.module('socialLogin')

app.directive("userCard", function(userSrvc){
  return {
    restrict: 'A',
    scope: {
      userId: '@userId'
    },
    templateUrl: (elem, attr) => `js/directives/userCard.html`,
    controller: function($scope){
      console.log('object in userCard dirctive: ', $scope.userId)
      $scope.id = $scope.userId;
      $scope.user = userSrvc.allUsers[$scope.userId];
    }
  }
})