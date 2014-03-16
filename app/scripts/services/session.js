'use strict';

angular.module('epictowerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
