'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('TracksController', ['$scope', 'Track',
  function($scope, Track) {
    $scope.tracks = Track.query();

    $scope.getIframeSrc = function(trackId) {
      return 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + trackId + '&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true';
    };
  }]);
