angular.module('socialLogin')

.service('userSrvc', function(){

  this.me = null;  //id of my user info
  this.allUsers= {};

  this.saveMe = function(user){
    this.me = user._id;
    console.log('saved me: ', this.me)
    this.allUsers[user._id] = user;
  }

})