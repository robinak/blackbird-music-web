'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('TracksController', ['$scope', 'Track',
  function($scope, Track) {
    $scope.tracks = Track.query();

    $scope.getSoundcloudIframeSrc = function(soundcloudTrackId) {
      return 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + soundcloudTrackId + '&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true';
    };

    $scope.getYouTubeIframeSrc = function(youTubeVideoId) {
      return 'https://www.youtube.com/embed/' + youTubeVideoId + '?rel=0&autohide=1';
    };

    $scope.getArtistAndTitle = function(track) {
      var artistAndTitle = track.artist.name;
      artistAndTitle += track.featuring ? (" feat. " + track.featuring.name) : "";
      artistAndTitle += " - ";
      artistAndTitle += track.title;

      if (track.remixer || track.remixTitle) {
          artistAndTitle += " ("
          artistAndTitle += track.remixer ?  (track.remixer.name + " ") : "";
          artistAndTitle += track.remixTitle ?  track.remixTitle : "";
          artistAndTitle += ")"
      }

      artistAndTitle += track.preview ? (" [PREVIEW]") : "";
      return artistAndTitle;
    };


  }]);
