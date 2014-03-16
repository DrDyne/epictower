'use strict';

angular.module('epictowerApp')
  .controller('MainCtrl', function ($scope, $http, Com) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    Com.on('hello', function (data) {
      console.log('received', data, 'yeah');
    });
  });
