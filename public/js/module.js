'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})

    $authProvider.github({
      clientId: '8aab8352328cb15d0896'
    });

    $authProvider.facebook({
      clientId: "1730808123819362"
    });

});
