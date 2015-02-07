'use strict';

/* App Module */

var blackbirdMusicApp = angular.module('blackbirdMusicApp', [
  'ngRoute',
  'controllers',
  'filters',
  'services'
]);

blackbirdMusicApp.config(['$routeProvider', '$sceDelegateProvider',
  function($routeProvider, $sceDelegateProvider) {
    $routeProvider.
      when('/tracks', {
        templateUrl: 'partials/tracks.html',
        controller: 'TracksController'
      }).
      otherwise({
        redirectTo: '/tracks'
      });

    $sceDelegateProvider
      .resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**',
        'https://w.soundcloud.com/**',
        'https://api.soundcloud.com/**'
    ]);
  }]);