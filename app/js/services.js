'use strict';

/* Services */

var services = angular.module('services', ['ngResource']);

services.factory('Track', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/soundcloud/tracks', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
