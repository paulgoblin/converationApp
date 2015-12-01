angular.module('socialLogin')

.service('conversationSrvc', function($http){

  this.conversations = {};

  this.getConvos = (youId, meId) => {
    console.log('getting convso', youId, meId)
    $http.get('/conversation/' + youId + '/' + meId).then((resp) => {
      console.log('got conversation: ',resp)
    }).catch(function(resp){
      console.log('failed to get conversation')
    })
  }

})