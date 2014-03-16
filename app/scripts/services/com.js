'use strict';

angular.module('epictowerApp')
.service('Com', function Com(socketFactory) {
  var socket = io.connect('http://localhost');
  return socketFactory({ioSocket: socket});
});
